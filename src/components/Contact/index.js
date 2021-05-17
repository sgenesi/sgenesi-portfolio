import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    return (
        <section>
            <div className="center">
                <h2 className="page-header">Contact Me</h2>
            </div>
            <div>
                Email me at: <a href="mailto:sgenesi8109@gmail.com">sgenesi8109@gmail.com</ a>
                <br></br>
                Give me a call or text me at: <a href="tel:3216627570">321.662.7570</a>
            </div>
        </section>
    );
}

export default Contact;