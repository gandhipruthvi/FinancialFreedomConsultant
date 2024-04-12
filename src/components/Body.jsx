import "../Styles/Body.scss";

function Body() {
    return (
        <div className="body-container">
            <div className="body-text-content">
                <p className="body-description">
                    Welcome to Financial Freedom Consultant, where our commitment
                    lies in assisting clients in attaining their financial aspirations.
                </p>
            </div>

            <div className="body-text-content">
                <p className="body-description">
                    Ready for financial freedom? Let us guide you at Financial Freedom Consultants.
                </p>
            </div>

            <div className="body-btn">
                <a href="contact.html" className=" priceItem qu_btn">Join With Us</a>
            </div>
        </div>
    )
}
{/* <section className="bodyContainer">
            <div className="container largeContainer">
                <div class="row">
                    <div class="col-xl-3 col-md-12">
                        <h2 class="secTitle">Welcome to Financial Freedom Consultant, where our commitment
                            lies in assisting clients in attaining their financial aspirations.</h2>
                    </div>
                    <div class="col-xl-7 col-md-8">

                        <p>Are you prepared to seize control of your financial destiny and realize genuine
                            financial freedom? At Financial Freedom Consultants, we're here to accompany you
                            on your journey towards a secure and prosperous future.</p>

                    </div>
                    <div class="col-xl-2 col-md-4">
                        <a href="contact.html" className=" priceItem qu_btn">Join With Us</a>
                    </div>
                </div>
            </div>
        </section> */}
export default Body;