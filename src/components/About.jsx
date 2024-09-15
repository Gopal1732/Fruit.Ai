import React from 'react';
import BackToHomeButton from './BackToHomeButton'; 
import '../App.css'; 

const About = () => {
    return (
        <div className="about-container">
            <BackToHomeButton /> 
            <div className="content-wrapper">
                <h1>About NutriTech</h1>
                <div className="details-section">
                    <h2>Our Mission</h2>
                    <p>
                        At NutriTech, we believe in the power of fruits and vegetables to enhance overall health and well-being. Our mission is to provide you with accurate, actionable information about the nutritional benefits of these natural wonders, helping you make informed choices for a healthier lifestyle.
                    </p>

                    <h2>Why Fruits and Vegetables?</h2>
                    <p>
                        Fruits and vegetables are vital components of a balanced diet. They are rich in essential vitamins, minerals, and antioxidants that support various bodily functions, from boosting immunity to improving digestion. Our goal is to educate and inspire you to incorporate more of these nutritious foods into your daily routine.
                    </p>

                    <h2>What We Offer</h2>
                    <p>
                        NutriTech offers comprehensive insights into a wide variety of fruits and vegetables. Explore detailed information on their health benefits, nutritional profiles, and ways to enjoy them in your meals. Whether you're looking to understand the benefits of berries, leafy greens, or root vegetables, we've got you covered.
                    </p>

                    <h2>Join Us on Our Journey</h2>
                    <p>
                        We invite you to join us on our journey to better health. Explore our resources, engage with our community, and discover how fruits and vegetables can make a significant difference in your life. Together, we can achieve a healthier and more vibrant lifestyle.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
