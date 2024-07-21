package com.demo.controller;

import java.io.IOException;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.demo.model.Resume;
import com.demo.util.PdfOneGenerator;

@RestController
@RequestMapping(path = "/api")
public class ResumeController {

	private static final Logger log = Logger.getLogger(ResumeController.class);

	@Autowired
	private PdfOneGenerator pdfGen;

	@PostMapping(path = "/resume")
	public ResponseEntity<String> postResume(@Validated @RequestBody Resume resume) throws IOException {

		System.out.println(resume.getHeader());
		System.out.println(resume.getExperience());
		System.out.println(resume.getEducation());
		System.out.println(resume.getProjects());
		System.out.println(resume.getSkills());
		return new ResponseEntity<String>(pdfGen.createDocument(resume), HttpStatus.OK);
	}

	@GetMapping(path = "/resumef/{filename}")
	public ResponseEntity<Resource> getResume(@PathVariable("filename") String fileName) throws IOException {

		byte[] pdfBytes = pdfGen.getDocument(fileName);

		if (pdfBytes != null) {
			ByteArrayResource resource = new ByteArrayResource(pdfBytes);

			HttpHeaders headers = new HttpHeaders();
			headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName + ".pdf");

			return ResponseEntity.ok()
					.headers(headers)
					.contentType(MediaType.APPLICATION_PDF)
					.body(resource);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
