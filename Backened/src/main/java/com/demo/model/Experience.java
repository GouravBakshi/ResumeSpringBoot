package com.demo.model;

import java.util.List;

public class Experience {
	private String company;
	private String jobrole;
	private String period;
	private String location;
	public String getCompany() {
		return company;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "Experience [company=" + company + ", jobrole=" + jobrole + ", period=" + period + ", location="
				+ location + "]";
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getJobrole() {
		return jobrole;
	}

	public void setJobrole(String jobrole) {
		this.jobrole = jobrole;
	}

	public String getPeriod() {
		return period;
	}

	public void setPeriod(String period) {
		this.period = period;
	}



}