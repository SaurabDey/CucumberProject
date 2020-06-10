package com.org.CucumberProject;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//Junit or TestNg

@RunWith(Cucumber.class)
@CucumberOptions(
		         features = "featureFolder/First.feature", 
		         glue = "com.org.CucumberProject",
		         plugin  = {"pretty:STDOUT","html:target/HTMLCucumberReport","json:target/Cucumber.json"},
		         monochrome=true
		)
public class FirstRunnerClass
{

	/*
	 * @Test public void a() {}
	 */

}
