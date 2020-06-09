package com.org.CucumberProject;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//Junit or TestNg

@RunWith(Cucumber.class)
@CucumberOptions(
		         features = "featureFolder", 
		         glue = "com.org.CucumberProject",
		         plugin  = {"pretty:STDOUT","html:target/HTMLCucumberReport","json:target/Cucumber.json"},
		         tags= {"@Regression"},
		         monochrome=true
		)
public class RunnerClass // extends AbstractTestNGCucumberTests
{

	/*
	 * @Test public void a() {}
	 */

}
