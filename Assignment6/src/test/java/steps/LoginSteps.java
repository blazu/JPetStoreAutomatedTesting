package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;

import static org.junit.Assert.*;

public class LoginSteps {

	private WebDriver driver;
	//edit this in the case of bringing vm up/down as vm will change.
	private String IP = "";
	
	@Given("^I open Firefox browser$")
	public void i_open_Firefox_browser() throws Throwable {
		System.setProperty("webdriver.gecko.driver","firefox/geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();	    
	}

	@Given("^I go to JPetStore page$")
	public void i_go_to_JPetStore_page() throws Throwable {
		driver.get("http://" + IP + ":8080/jpetstore/actions/Account.action?signonForm=");
	}

	@When("^I enter a valid \"([^\"]*)\" and \"([^\"]*)\" combination$")
	public void i_enter_a_valid_and_combination(String arg1, String arg2) throws Throwable {
		driver.findElement(By.name("username")).clear();
		driver.findElement(By.name("username")).sendKeys(arg1);
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(arg2);
		driver.findElement(By.name("signon")).click();
	}

	@Then("^I should be able to login successfully$")
	public void i_should_be_able_to_login_successfully() throws Throwable {
		try{
			WebElement element = driver.findElement(By.linkText("Sign Out"));
			assertTrue(true);
		}catch(Exception e){
			fail();
		}finally{
			driver.quit();
		}
	}

	@Given("^I click Register$")
	public void I_click_Register() throws Throwable {
		driver.findElement(By.linkText("Register Now!")).click();
	}
	
	@When("^I enter a new valid \"([^\"]*)\" and \"([^\"]*)\" combination$")
	public void i_enter_a_new_valid_and_combination(String arg1, String arg2) throws Throwable {
		driver.findElement(By.name("username")).clear();
		driver.findElement(By.name("username")).sendKeys(arg1);
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(arg2);
		driver.findElement(By.name("repeatedPassword")).clear();
		driver.findElement(By.name("repeatedPassword")).sendKeys(arg2);
	}

	@When("^I enter new account information \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void i_enter_new_account_information(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9) throws Throwable {
		//"<first name>" "<last name>" "<email>" "<phone>" "<address>" "<city>" "<state>" "<zip>" "<country>"
		driver.findElement(By.name("account.firstName")).sendKeys(arg1);
		driver.findElement(By.name("account.lastName")).sendKeys(arg2);
		driver.findElement(By.name("account.email")).sendKeys(arg3);
		driver.findElement(By.name("account.phone")).sendKeys(arg4);
		driver.findElement(By.name("account.address1")).sendKeys(arg5);
		driver.findElement(By.name("account.city")).sendKeys(arg6);
		driver.findElement(By.name("account.state")).sendKeys(arg7);
		driver.findElement(By.name("account.zip")).sendKeys(arg8);
		driver.findElement(By.name("account.country")).sendKeys(arg9);
		
		driver.findElement(By.name("newAccount")).click();
	}

	@Then("^I should be able to create a new account with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_should_be_able_to_create_a_new_account_with_and(String arg1, String arg2) throws Throwable {
		i_go_to_JPetStore_page();
		i_enter_a_valid_and_combination(arg1, arg2);
		i_should_be_able_to_login_successfully(); 
	}
	
	@Given("^I login and go to my account$")
	public void i_login_and_go_to_my_account() throws Throwable {
	    driver.findElement(By.linkText("My Account")).click();
	}

	@When("^I enter a new \"([^\"]*)\"$")
	public void i_enter_a_new(String arg1) throws Throwable {
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("repeatedPassword")).clear();
		driver.findElement(By.name("password")).sendKeys(arg1);
		driver.findElement(By.name("repeatedPassword")).sendKeys(arg1);
		
		driver.findElement(By.name("editAccount")).click();
	}

	@When("^sign out$")
	public void sign_out() throws Throwable {
		driver.findElement(By.linkText("Sign Out")).click();
	}
	
	@When("^I enter a invalid \"([^\"]*)\" and \"([^\"]*)\" combination$")
	public void i_enter_a_invalid_and_combination(String arg1, String arg2) throws Throwable {
		driver.findElement(By.name("username")).clear();
		driver.findElement(By.name("username")).sendKeys(arg1);
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(arg2);
		driver.findElement(By.name("signon")).click();
	}

	@Then("^I should get an error$")
	public void i_should_get_an_error() throws Throwable {
		try{
			WebElement element = driver.findElement(By.linkText("Sign Out"));
			fail();
		}catch(Exception e){
			assertTrue(true);
		}finally{
			driver.quit();
		}
	}
	
	@Then("^I should get an error based on missing information$")
	public void i_should_get_an_error_based_on_missing_information() throws Throwable {
	    try{
	    	WebElement element = driver.findElement(By.className("messages"));
	    	assertTrue(true);
	    }catch(Exception e){
	    	fail();
	    }finally{
	    	driver.quit();
	    }
	}
	
	@When("^I enter a new \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_a_new_and(String arg1, String arg2) throws Throwable {
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("repeatedPassword")).clear();
		driver.findElement(By.name("password")).sendKeys(arg1);
		driver.findElement(By.name("repeatedPassword")).sendKeys(arg2);
		
		driver.findElement(By.name("editAccount")).click();
	}
	
}