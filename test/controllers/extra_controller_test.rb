require "test_helper"

class ExtraControllerTest < ActionDispatch::IntegrationTest
  test "should get activity" do
    get extra_activity_url
    assert_response :success
  end

  test "should get gallery" do
    get extra_gallery_url
    assert_response :success
  end

  test "should get invoice" do
    get extra_invoice_url
    assert_response :success
  end
end
