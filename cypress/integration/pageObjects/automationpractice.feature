Feature: The automationpractice

  I want to open automationpractice page

  Scenario: order and make payment
    Given I open automationpractice page
    Then "automationpractice.com" should be shown on URL
    When  I click on Women T-shirts
    Then "id_category=5" should be shown on URL
    When I Click on more for product
    Then "id_product=1" should be shown on URL
    When  I select Color Blue
    And  I select Quantity 3 
    And  I select Size M
    And  I click on Add to cart
    Then should be shown Color Blue And Size M
    And  should be shown Quantity 3
    And  should be shown Total $49.53

    When  I click on Proceed to checkout[shopping cart]
    Then "Shopping-cart summary" should be shown
    When  I click on Proceed to checkout[Shopping-cart summary]
    Then "Authentication" should be shown
    When I fill valid Email
    And I fill valid password
    And I click on Sign in
    Then "Addresses" should be shown
    When  I click on Proceed to checkout[Addresses]
    Then should be shown Shipping 
    When  I click on Proceed to checkout[Shipping]
    Then "Please choose your payment method" should be shown  
    When  I click on Pay by check
    Then should be shown Check payment
    When  I click on  I confirm my order
    Then "Your order on My Store is complete." should be shown
    
   
    
    
    

    
    

   
   
