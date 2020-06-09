package com.org.CucumberProject;

import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Hello world!
 *
 */
public class StepDefination
{
    
	WebDriver driver;
	@Given("^I have opened the site$")
	public void i_have_opened_the_site() throws Throwable {

		this.driver=HooksClass.driver;
	}

	@When("^I enter correct (\\w+) and (\\w+)$")
	public void i_enter_correct_username_and_password(String x, String y) throws Throwable {

		LoginClass login=new LoginClass(driver);
		login.logWithParameter(x, y);
	}
	@When("I enter correct credentials")
	public void tryingMethod(DataTable data) throws Throwable {
		 List<List<String>> values=data.raw();
		 
		LoginClass login=new LoginClass(driver);
		login.logWithParameter(values.get(1).get(0), values.get(1).get(1));
	}

	@Then("^I should get logged in$")
	public void i_should_get_logged_in() throws Throwable {

		Assert.assertEquals(driver.getCurrentUrl(), "https://opensource-demo.orangehrmlive.com/index.php/dashboard");

	}

	@Then("I should stay in the login page")
	public void i_should_stay_in_the_login_page() throws Throwable {

		Assert.assertEquals(driver.getCurrentUrl(), "https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials");
	
	}
	@When("I enter wrong credentails i.e. (\\w+) and (\\w+)")
	public void i_enter_incorrect_username_and_password(String a, String b) throws Throwable {
       
		LoginClass login=new LoginClass(driver);
		login.logWithParameter(a, b);
	}
	
	
	@Given("I am having some prerequisite")
	public void pre()
	{
		RuntimeMXBean runtimeBean = ManagementFactory.getRuntimeMXBean();
		 
        Map<String, String> systemProperties = runtimeBean.getSystemProperties();
 
        String key="os.name";
            String value = systemProperties.get(key);
            System.out.printf("::::::::::::::[%s] = %s.\n", key, value);
        
	}

}
