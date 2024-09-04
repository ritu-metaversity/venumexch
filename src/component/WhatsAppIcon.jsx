/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import './WhatsAppIcon.css'
import axios from "axios";
const WhatsAppIcon = ({ top }) => {
    const [footerImage, setFooterImage] = useState({});

    const apiEndpoint = 'https://adminapi.foldexch.com/admin-new-apis/api/admin/getData';

    useEffect(() => {
        axios.post(apiEndpoint)
            .then(response => {

                setFooterImage(response.data)
            })
            .catch(error => {

                console.error('Error fetching data:', error);
            });

    }, []);

    return (
        <div>
            <a
                href={footerImage?.s_whatsapp?.link != null ? footerImage?.s_whatsapp?.link : "#"}
                className="whatsapp-fixed"
                style={{ top: `calc(${top}px + 80vh)` }}>
                <div className="whatsapp-text">
                    <span>Get an ID Instantly on Whatsapp</span>{" "}
                    <span>Click Here Now</span>
                </div>
                <img alt="whatsapp" src="/homeeee/whatsapp_img.png" />
            </a>
        </div>
    );
};

export default WhatsAppIcon;

