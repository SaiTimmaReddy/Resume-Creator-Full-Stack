import React from 'react';

const Header = ({ headers }) => {
    return (
        <section class="header">
            <h1 class="name">{headers.name}</h1>
            <h3 class="designation">{headers.designation}</h3>

            <div class="links-contactdetails">
                <ul>
                    <li>
                        <a href={headers.linkedinlink} target="_blank">
                            {headers.linkedinlink}
                        </a>
                    </li>
                    <li>
                        <a href={headers.githublink} target="_blank">
                            {headers.githublink}
                        </a>
                    </li>
                    <li>
                        <a href={headers.portfoliolink} target="_blank">
                            {headers.portfoliolink}
                        </a>
                    </li>
                </ul>
                <div class="contact-details">
                    {headers.address}
                    <br />
                    {headers.cellnumber} <br />
                    <span class="email">Email: {headers.email}|</span>
                </div>
            </div>
        </section>
    );
};

export default Header;
