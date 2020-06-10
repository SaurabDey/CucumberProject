package com.org.CucumberProject.common;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass 
{
	public static WebDriver driver;
	@Before
	public void b()
	{
		PropertyConfigurator.configure("Resource/log4j.properties");
		
		System.setProperty("webdriver.ie.driver", "Resource/IEDriverServer.exe");
		driver = new InternetExplorerDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	
	@After
	public void a()
	{
		driver.quit();
	}
}
