import axiosClient from "./axios"

const VersionUrl = 'version/'

export const getVersionService = async (params) => await axiosClient.post(VersionUrl + 'get_version', params);

const AuthUrl = 'users/'

export const userLoginService = async (params) => await axiosClient.post(AuthUrl + 'login_auth', params);
export const userRegisterService = async (params) => await axiosClient.post(AuthUrl + 'registration', params);
export const sendVerificationOtpService = async (params) => await axiosClient.post(AuthUrl + 'send_verification_otp', params)
export const updatePasswordService = async (params) => await axiosClient.post(AuthUrl + 'update_password', params);
export const userLogoutService = async () => await axiosClient.post(AuthUrl + 'logout');
export const getMyProfileService = async () => await axiosClient.post(AuthUrl + 'get_my_profile');
export const userUpdateProfileService = async (params) => await axiosClient.post(AuthUrl + 'update_profile', params);
export const userProfileDeleteService = async (params) => await axiosClient.post(AuthUrl + 'delete_user_account', params);




// Master hit
const MasterUrl = 'master_hit/';
export const getCourse_Catergory_Service = async (params) => await axiosClient.post(MasterUrl + 'content', params);
export const countryListService = async () => await axiosClient.post(MasterUrl + 'get_countries');
export const stateListService = async (params) => await axiosClient.post(MasterUrl + 'get_states', params);
export const cityListService = async (params) => await axiosClient.post(MasterUrl + 'get_cities', params);
export const refundPolicyService = async (params) => await axiosClient.post(MasterUrl + 'refund', params);
export const aboutUsService = async (params) => await axiosClient.post(MasterUrl + 'about', params);
export const contactService = async (params) => await axiosClient.post(MasterUrl + 'contact', params);
export const policiesService = async (params) => await axiosClient.post(MasterUrl + 'policies', params);
export const termService = async (params) => await axiosClient.post(MasterUrl + 'terms', params);
export const faqService = async (params) => await axiosClient.post(MasterUrl + 'get_app_faq', params);
export const getTestimonialService = async (params) => await axiosClient.post(MasterUrl + 'get_testimonial_list', params)

// Courses
const CourseUrl = 'course_deprecated/'
// /get_course_categorywise
export const getCourse_Detail_Service = async (params) => await axiosClient.post(CourseUrl + 'get_course_detail', params);
export const getCourses_Service = async (params) => await axiosClient.post('course/get_courses', params);

// Event
const eventUrl = 'event/'
export const event_registration_Service = async (params) => await axiosClient.post(eventUrl + 'event_registration', params);
export const event_registration_for_dummyUser_Service = async (params) => await axiosClient.post(eventUrl + 'dummy_user', params);
export const download_Ticket_Service = async (params) => await axiosClient.post(eventUrl + 'event_Card', params);

// Test
const TestUrl = 'test/'
export const subjective_Test_Result_Service = async (params) => await axiosClient.post(TestUrl + 'subjective_result', params);
// https://developer.videocrypt.in/index.php/data_model/test/subjective_result
// payment
const paymentUrl = 'payment';
export const getFPaymentService = async (params) => await axiosClient.post(paymentUrl + '/f_payment', params);
export const freeTransactionService = async (params) => await axiosClient.post(paymentUrl + '/free_transaction', params)
export const getPayGateWayService = async (params) => await axiosClient.post('master_hit/get_pay_gateway', params);
export const deleteCourseService = async (params) => await axiosClient.post(paymentUrl + '/remove_course', params);


// Address

export const getUserAddressService = async (params) => await axiosClient.post(paymentUrl + '/get_user_address', params);
export const saveUserAddressService = async (params) => await axiosClient.post(paymentUrl + '/save_user_address', params);
export const deleteUserAddressService = async (params) => await axiosClient.post(paymentUrl + '/delete_user_address', params);

const coursesUrl = 'course/';
export const getMyCourseService = async (params) => await axiosClient.post(coursesUrl + 'get_my_courses', params);
export const getMyOrderService = async (params) => await axiosClient.post(coursesUrl + 'get_my_orders', params);
export const getCourse_Categorywise_Service = async (params) => await axiosClient.post(coursesUrl + 'get_course_categorywise', params);
export const getMasterDataService = async (params) => await axiosClient.post(coursesUrl + 'get_master_data', params);
export const getCourseReviewService = async (params) => await axiosClient.post(coursesUrl + 'course_review_list', params);
export const courseSearchService = async (params) => await axiosClient.post(coursesUrl + 'course_content_search', params);

// Cart

const cartUrl = 'cart/'

export const addToCartService = async (params) => await axiosClient.post(cartUrl + 'addtocart', params);
export const cartCountService = async (params) => await axiosClient.post(cartUrl + 'cartcount', params);
export const showCartService = async (params) => await axiosClient.post(cartUrl + 'showcart', params);
export const removeCartItemService = async (params) => await axiosClient.post(cartUrl + 'removeitem', params);

// Coupons

const couponUrl = 'coupon/'
export const getCouponService = async (params) => await axiosClient.post(couponUrl + 'get_coupon_over_course', params);
export const couponVerifyService = async (params) => await axiosClient.post(couponUrl + 'coupon_verification', params);

const notificationUrl = 'notification/'
export const getNotificationService = async (params) => await axiosClient.post(notificationUrl + 'get_notifications', params);
export const deleteNotificationService = async (params) => await axiosClient.post(notificationUrl + 'delete_notification', params);


