import React from 'react'
import styled from '@emotion/styled'
import { FiPhone, FiCompass, FiGithub, FiMail, FiTwitter } from 'react-icons/fi'

const SIDEBAR_COLOR = '#304656'

const Wrap = styled.div`
  max-width: 840px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px 1fr;
  font-size: 16px;
  font-weight: 300;
  height: 100%;
  overflow: hidden;
  position: relative;

  /* &:before {
    content: '';
    width: 120%;
    height: 200px;
    position: absolute;
    top: -112px;
    left: 0;
    right: 0;
    transform: rotate(10deg);
    background: #323244;
  } */

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const Sidebar = styled.div`
  background: ${SIDEBAR_COLOR};
  color: white;
  padding: 40px;
  min-height: 100%;
  height: 100vh;
`

const Content = styled.div`
  background: white;
  padding: 40px;
  min-height: 100%;

  li + li {
    margin-top: 5px;
  }
`

const Profile = styled.img`
  border-radius: 5px;
  margin-top: 40px;
  margin-top: 0;
`

const H1 = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  margin: 161px 0 20px;
  margin-top: 0;
  line-height: 1;
  letter-spacing: 5px;
  color: ${SIDEBAR_COLOR};
`

const H2 = styled.h2`
  font-size: 25px;
  text-transform: uppercase;
  margin: 40px 0 20px;
  letter-spacing: 1px;
`
const ContentH2 = styled(H2)`
  color: ${SIDEBAR_COLOR};
`

const H3 = styled.h2`
  font-size: 18px;
  margin: 0 0 20px;
  font-weight: 300;
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

const Year = styled.h4`
  margin: 40px 0 0;
  font-weight: 300;
  text-transform: uppercase;
`

const CompanyHeader = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 70px 1fr;

  img {
    border-radius: 5px;
  }

  h4 {
    font-size: 20px;
    margin: -2px 0 5px;
    font-weight: 400;
    line-height: 1;
  }

  h5 {
    font-size: 15px;
    margin: 0 0 5px;
    font-weight: 400;
    line-height: 1;
  }

  h6 {
    font-size: 15px;
    margin: 0;
    color: #828282;
    font-weight: 400;
  }
`

const PageBreak = styled.div`
  page-break-after: always;
`

export default function CV() {
  return (
    <>
      <Wrap>
        <Sidebar>
          <Profile src="/profile.jpeg" width="200" />

          <H2>Get in touch!</H2>
          <HR width="100" />
          <Contact>
            <FiMail size="20" /> <a href="mailto:dano.husar@gmail.com">dano.husar@gmail.com</a>
            <FiCompass size="20" /> <a href="https://www.danielhusar.sk">www.danielhusar.sk</a>
            <FiPhone size="20" /> +1 415 966 8354
            <FiGithub size="20" /> <a href="https://github.com/danielhusar">danielhusar</a>
            <FiTwitter size="20" /> <a href="https://twitter.com/DanoHusar">DanoHusar</a>
          </Contact>

          <H2>Technologies</H2>
          <HR width="100" />
          <Spacer height={20} />
          <div>JavaScript, CSS, Ruby, PHP, SQL, GraphQL, React, Ember, Ruby on Rails</div>

          <H2>Languages</H2>
          <HR width="100" />
          <Spacer height={20} />
          <div>English, Slovak, Czech, German (basics)</div>
        </Sidebar>
        <Content>
          <H1>Daniel Husar</H1>
          <H3>Full stack engineer focusing on building beautiful UIs.</H3>

          <ContentH2>Experience</ContentH2>
          <HR width="100" />

          <Year>Aug 2016 - Present</Year>
          <CompanyHeader>
            <img src="/intercom.svg" width="60" />
            <div>
              <h4>
                <a href="https://www.intercom.com/">Intercom</a>
              </h4>
              <h5>Product Engineer</h5>
              <h6>San Francisco, California</h6>
            </div>
          </CompanyHeader>
          <ul>
            <li>
              Tech lead on the messenger accessibility project (<a href="https://www.intercom.com/blog/messenger-accessibility/">blog post</a>)
            </li>
            <li>
              Introducing bundle splitting and reducing the messenger size by 65% (
              <a href="https://www.intercom.com/blog/reducing-intercom-messenger-bundle-size/">blog post</a>)
            </li>
            <li>Tech lead on sass to css-in-js (emotion) rewrite in the messenger</li>
          </ul>

          <Year>May 2019 - Present</Year>
          <CompanyHeader>
            <img src="/slovensko-digital.png" width="60" />
            <div>
              <h4>
                <a href="https://slovensko.digital/">Slovensko Digital (non profit organization)</a>
              </h4>
              <h5>Full Stack Engineer</h5>
              <h6>San Francisco, California</h6>
            </div>
          </CompanyHeader>
          <ul>
            <li>Tech lead on the online application project that helped people to vote for last parliament elections.</li>
          </ul>

          <Year>Sep 2014 - Aug 2016</Year>
          <CompanyHeader>
            <img src="/intercom.svg" width="60" />
            <div>
              <h4>
                <a href="https://www.intercom.com/">Intercom</a>
              </h4>
              <h5>Product Engineer</h5>
              <h6>Dublin, Ireland</h6>
            </div>
          </CompanyHeader>
          <ul>
            <li>Front-end lead on the Intercom help center articles product.</li>
            <li>Working closely with gtm, marketing and sales teams.</li>
          </ul>

          <PageBreak />
          <Year>Sep 2013 - Sep 2014</Year>
          <CompanyHeader>
            <img src="/each-and-other.png" width="60" />
            <div>
              <h4>
                <a href="https://www.eachandother.com/">Each and Other</a>
              </h4>
              <h5>Front-end Engineer</h5>
              <h6>Dublin, Ireland</h6>
            </div>
          </CompanyHeader>
          <ul>
            <li>Front-end lead on the Pernament TSB new internet banking.</li>
            <li>Front-end lead on the Liberty Insurance Ireland new website.</li>
            <li>Helping shipping the new Vodafone Ireland site.</li>
          </ul>

          <Year>Nov 2011 – Aug 2013</Year>
          <CompanyHeader>
            <img src="/perform.jpeg" width="60" />
            <div>
              <h4>
                <a href="https://www.eachandother.com/">Perform Group</a>
              </h4>
              <h5>Web Developer</h5>
              <h6>Kosice, Slovakia</h6>
            </div>
          </CompanyHeader>
          <ul>
            <li>Front-end lead on the Pernament TSB new internet banking.</li>
            <li>Front-end lead on the Liberty Insurance Ireland new website.</li>
            <li>Helping shipping the new Vodafone Ireland site.</li>
          </ul>

          <Spacer height={20} />
          <ContentH2>Education</ContentH2>
          <HR width="100" />

          <Year>Sep 2004 - Jun 2009</Year>
          <CompanyHeader>
            <img src="/tuke.png" width="60" />
            <div>
              <h4>
                <a href="https://www.tuke.sk/">Technical University of Kosice</a>
              </h4>
              <h5>Engineer's degree, Artificial Intelligence</h5>
              <h6>Kosice, Slovakia</h6>
            </div>
          </CompanyHeader>
        </Content>
      </Wrap>
      <style>
        {`
          html,
          body,
          #___gatsby,
          #gatsby-focus-wrapper {
            min-height: 100%;
            padding: 0;
            margin: 0;
            -webkit-font-smoothing: antialiased;
          }
        `}
      </style>
    </>
  )
}
