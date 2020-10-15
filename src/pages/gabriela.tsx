import React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import { FiPhone, FiCompass, FiGithub, FiMail, FiTwitter } from 'react-icons/fi'

const SIDEBAR_COLOR = '#304656'

const Wrap = styled.div`
  max-width: 840px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 310px 1fr;
  font-size: 15px;
  font-weight: 300;
  overflow: hidden;
  position: relative;
  -webkit-font-smoothing: antialiased;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    margin: 0.5em 0;
    font-size: 16px;
  }
`

const Sidebar = styled.div`
  background: ${SIDEBAR_COLOR};
  color: white;
  padding: 25px;
  min-height: 100vh;

  @media print {
    min-height: 200vh;
  }
`

const PageBreak = styled.div`
  page-break-before: always;

  @media print {
    padding-top: 30px;
  }
`

const Content = styled.div`
  background: white;
  padding: 25px;
  min-height: 100%;

  ul {
    margin: 15px 0 0;
    padding-left: 18px;
    font-size: 15px;
  }

  ul ul {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  li + li {
    margin-top: 5px;
  }
`

const H1 = styled.h1`
  font-size: 37px;
  text-transform: uppercase;
  margin: 0 0 20px;
  line-height: 1;
  letter-spacing: 5px;
  color: ${SIDEBAR_COLOR};
`

const H2 = styled.h2`
  font-size: 22px;
  text-transform: uppercase;
  margin: 30px 0 18px;
  letter-spacing: 1px;
  font-weight: 500;
`
const ContentH2 = styled(H2)`
  color: ${SIDEBAR_COLOR};
`

const Contact = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-row-gap: 10px;
  margin-top: 25px;
  align-items: center;

  svg {
    stroke-width: 1;
  }
`

const HR = styled.div<{ width: number | string }>`
  border-top: 1px solid #ccc;
  width: ${({ width }) => width}px;
`
const Spacer = styled.div<{ height: number | string }>`
  height: ${({ height }) => height}px;
`

const Bigger = styled.div`
  font-size: 17px;
`

const Small = styled.div`
  font-size: 14px;
`

const Uppercase = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Work = styled.div`
  margin: 25px 0 0;

  & + & {
    margin-top: 35px;
  }
`

const WorkHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;

  img {
    width: 38px;
    border-radius: 5px;
    filter: grayscale(100%) contrast(3);
  }
`

const Company = styled.h4`
  margin: -4px 0 0;
  font-size: 18px;
  font-weight: 300;
`

const Position = styled.h4`
  font-size: 15px;
  margin: 2px 0 0;
  font-weight: 400;
  line-height: 1;
`

export default function CV() {
  return (
    <>
      <Helmet>
        <title>Gabriela Husarova</title>
      </Helmet>
      <Wrap>
        <Sidebar>
          <H2 style={{ marginTop: 0 }}>Get in touch!</H2>
          <HR width="100" />
          <Contact>
            <FiMail size="20" /> <a href="mailto:dano.husar@gmail.com">gab.husarova@gmail.com</a>
            <FiPhone size="20" /> <a href="tel:+421904342152">+421 904 342 152</a>
          </Contact>

          <H2>Languages</H2>
          <HR width="100" />
          <Spacer height={20} />
          <div>Slovak (native speaker)</div>
          <div>English (fluent)</div>
          <div>Czech (fluent)</div>
          <div>German (basics)</div>
          <div>Polish (basics)</div>

          <H2>Computer skills</H2>
          <HR width="100" />
          <Spacer height={20} />
          <div>Microsoft WIndows</div>
          <div>Mac OS</div>
          <div>Word</div>
          <div>Excel</div>
          <div>PowerPoint</div>
          <div>Internet</div>
          <div>Salesforce</div>
          <div>SQL</div>
          <div>Addepar</div>

          <H2>Education</H2>
          <HR width="100" />
          <Spacer height={20} />
          <div>
            <Small>
              <Uppercase>2009 - 2011</Uppercase>
            </Small>
            <Spacer height={5} />
            <div>
              <a href="https://www.euba.sk/en/">Economics University of Bratislava</a>
            </div>
          </div>
          <div>Master's Degree in Financial Management</div>
          <Spacer height={5} />
          <Small>Kosice, Slovakia</Small>

          <Spacer height={20} />
          <div>
            <Small>
              <Uppercase>2006 - 2009</Uppercase>
            </Small>
            <Spacer height={5} />
            <div>
              <a href="https://www.euba.sk/en/">Economics University of Bratislava</a>
            </div>
          </div>
          <div>Bachelor's Degree in Economics and Business Management</div>
          <Spacer height={5} />
          <Small>Kosice, Slovakia</Small>

          <PageBreak />
          <H2>Other skills</H2>
          <HR width="100" />
          <Spacer height={20} />
          <Small>
            <div>Ability to multi­task and manage time</div>
            <div>Ability to quickly learn and adapt to a new situation</div>
            <div>Communication and management skills</div>
            <div>Creativity</div>
          </Small>
        </Sidebar>
        <Content>
          <H1>Gabriela Husarova</H1>
          {/* <p>
            Hi! I'm a full-stack engineer with a decade of experience that loves solving real-world problems and focuses on building functional and
            beautiful UIs.
          </p>
          <p>
            For the last six years, I have been part of the Intercom engineering, where I have been working with all teams from the product,
            marketing, GTM to the growth.
          </p> */}
          <ContentH2>Experience</ContentH2>
          <HR width="100" />
          <Work>
            <Uppercase>April 2018 - July 2020</Uppercase>
            <Spacer height={10} />

            <WorkHeader>
              <img src="/wells-fargo.png" />
              <div>
                <Company>
                  <a href="https://www.wellsfargo.com/">Wells Fargo</a>
                </Company>
                <Position>Quality Assurance Analyst - San Francisco, California</Position>
              </div>
            </WorkHeader>
            <ul>
              <li>
                Evaluating, monitoring, assessing, and reviewing programs, processes, documentation to ensure compliance with internal company
                requirements and agency or government regulations
              </li>
              <li>Working with Back Office (Negotiators, Paralegal) to sustain timely and complete informational workflow</li>
              <li>Liaise with Front Office (DCOT and Sales Analyst) to obtain required documentation</li>
              <li>
                Taking one of the leadership positions in a project focused on new government regulation (U.S. Stay Regulations and the ISDA 2018 U.S.
                Resolution Stay Protocol) with the outcome of reviewing and making over 16000 clients compliant with U.S. Stay rule
              </li>
              <li>Distributing daily reports extracted from Salesforce to teammates and allocating documentation to review</li>{' '}
              <li>Participated in multiple group projects to bring old documentation up to date with correct regulatory standards</li>
              <li>Testing software updates and providing feedback for a more efficient user experience</li>
            </ul>
          </Work>

          <Work>
            <Uppercase>October 2017 - April 2018</Uppercase>
            <Spacer height={10} />
            <WorkHeader>
              <img src="/sonen.png" />
              <div>
                <Company>
                  <a href="http://www.sonencapital.com/">Sonen Capital </a>
                </Company>
                <Position>Data reconciliation - San Francisco, California</Position>
              </div>
            </WorkHeader>
            <ul>
              <li>Transferring data from clients statements to Addepar software</li>
              <li>
                Correcting wrong information in the system and ensuring all information from the financial statements are in Addepar and are coded
                correctly
              </li>
              <li>Checking that all historical data match with automatic data and are connected in a time when the program went live</li>
              <li>Reconciled total of 460 million dollars for 30 accounts</li>
            </ul>
          </Work>

          <PageBreak />

          <Work>
            <Uppercase>October 2014 - December 2015</Uppercase>
            <Spacer height={10} />
            <WorkHeader>
              <img src="/convergys.jpg" />
              <div>
                <Company>
                  <a href="https://www.concentrix.com/">Convergys</a>
                </Company>
                <Position>Customer support for Microsoft Xbox - Dublin, Ireland</Position>
              </div>
            </WorkHeader>
            <ul>
              <li>Technical support for incoming service inquiries</li>
              <li>Delivery of timely, accurate customer support with a high degree of customer service satisfaction</li>
              <li>Solving, troubleshooting, and investigating customer issues</li>
              <li>Resolving billing and networking problems</li>
              <li>Working with third parties, retailers and ISPs</li>
              <li>Dealing with customer complaints</li>
              <li>Coaching employees and demonstrating a commitment to personal improvement</li>
              <li>Delivering individual performance based on metrics and related targets</li>
              <li>Focusing on daily tasks, preparation of personal schedule and reports for team manager</li>
            </ul>
          </Work>
          <Work>
            <Uppercase>August 2011 - August 2013</Uppercase>
            <Spacer height={10} />
            <WorkHeader>
              <img src="/eduka.png" />
              <div>
                <Company>
                  <a href="https://www.eduka.sk/">Eduka</a>
                </Company>
                <Position>Project Manager for­ EU funds - Kosice Slovakia</Position>
              </div>
            </WorkHeader>
            <ul>
              <li>Project Manager for EU funds aimed at Operational Program </li>
              <li>Employment, Social Inclusion, and Operational Program Education</li>
              <li>Preparing applications for grants</li>
              <li>Setting a schedule of activities</li>
              <li>Tracking spending budget</li>
              <li>Reporting</li>
              <li>Public procurement</li>
              <li>Responsibility for project planning </li>
            </ul>
          </Work>
          <Work>
            <Uppercase>May 2011 - July 2011</Uppercase>
            <Spacer height={10} />
            <WorkHeader>
              <img src="/valdi.gif" />
              <div>
                <Company>Valdi</Company>
                <Position>Executive Assistant to CEO - Kosice Slovakia</Position>
              </div>
            </WorkHeader>
            <ul>
              <li>Daily administrative work</li>
              <li>Correspondence</li>
              <li>Reports</li>
              <li>Dealing with business travel and accommodation</li>
              <li>Ad­-hoc duties and tasks</li>
              <li>Office management </li>
            </ul>
          </Work>
        </Content>
      </Wrap>
    </>
  )
}
