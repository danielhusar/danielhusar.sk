import React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import { FiPhone, FiCompass, FiGithub, FiMail, FiTwitter } from 'react-icons/fi'

const SIDEBAR_COLOR = '#304656'

const Wrap = styled.div`
  max-width: 840px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 258px 1fr;
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
  padding: 30px;
  min-height: 100vh;
`

const Content = styled.div`
  background: white;
  padding: 30px;
  min-height: 100%;

  ul {
    margin: 15px 0 0;
    padding-left: 18px;
    font-size: 15px;
  }

  li + li {
    margin-top: 5px;
  }
`

const H1 = styled.h1`
  font-size: 40px;
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

const Small = styled.div`
  font-size: 14px;
`

const Uppercase = styled.div`
  text-transform: uppercase;
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
        <title>Daniel Husar</title>
      </Helmet>
      <Wrap>
        <Sidebar>
          <H2 style={{ marginTop: 0 }}>Get in touch!</H2>
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

          <H2>Education</H2>
          <HR width="100" />
          <Spacer height={20} />
          <div>
            <Small>
              <Uppercase>Sep 2004 - Jun 2009</Uppercase>
            </Small>
            <a href="https://www.tuke.sk/">Technical University of Kosice</a>
          </div>
          <div>Masters Degree</div>
        </Sidebar>
        <Content>
          <H1>Daniel Husar</H1>
          <p>Hi! I'm a full stack engineer that loves solving real world problems and focus on building functional and beautiful UIs.</p>
          <p>
            For the last 6 years I have been part of the Intercom engineering, where I worked with all teams from product, marketing, gtm to the
            growth.
          </p>

          <ContentH2>Experience</ContentH2>
          <HR width="100" />

          <Work>
            <Uppercase>Aug 2016 - Present</Uppercase>
            <Spacer height={10} />
            <WorkHeader>
              <img src="/intercom.svg" />
              <div>
                <Company>
                  <a href="https://www.intercom.com/">Intercom</a>
                </Company>
                <Position>Product Engineer - San Francisco, California</Position>
              </div>
            </WorkHeader>
            <ul>
              <li>
                Tech lead on the Messenger accessibility project that made Messenger AA accessible. (
                <a href="https://www.intercom.com/blog/messenger-accessibility/">link to a blog post</a>)
              </li>
              <li>
                Introducing bundle splitting and reducing the Messenger size by 65%. (
                <a href="https://www.intercom.com/blog/reducing-intercom-messenger-bundle-size/">link to a blog post</a>)
              </li>
              <li>Tech lead on sass to css-in-js (emotion) rewrite in the Messenger which improved speed and size of the Messenger.</li>
            </ul>
          </Work>

          <Work>
            <Uppercase>May 2019 - Present</Uppercase>
            <Spacer height={10} />
            <WorkHeader>
              <img src="/slovensko-digital.png" />
              <div>
                <Company>
                  <a href="https://slovensko.digital/">Slovensko Digital </a> (non profit organization)
                </Company>
                <Position>Full stack Engineer - San Francisco, California</Position>
              </div>
            </WorkHeader>
            <ul>
              <li>
                Tech lead on the online application that helped people to vote in the last parliament elections. This roughly increased elections
                attendance by 1%.
              </li>
            </ul>
          </Work>

          <Work>
            <Uppercase>Sep 2014 - Aug 2016</Uppercase>
            <Spacer height={10} />
            <WorkHeader>
              <img src="/intercom.svg" />
              <div>
                <Company>
                  <a href="https://www.intercom.com/">Intercom</a>
                </Company>
                <Position>Product Engineer - Dublin, Ireland</Position>
              </div>
            </WorkHeader>
            <ul>
              <li>Front-end lead on the Intercom help center articles product.</li>
              <li>
                Working closely with gtm, marketing and sales teams. Shipped several iterations of the marketing site and annual contracts for the
                sales team.
              </li>
            </ul>
          </Work>

          <Work>
            <Uppercase>Sep 2013 - Sep 2014</Uppercase>
            <Spacer height={10} />
            <WorkHeader>
              <img src="/each-and-other.png" />
              <div>
                <Company>
                  <a href="https://www.eachandother.com/">Each and Other</a>
                </Company>
                <Position>Front-end Engineer - Dublin, Ireland</Position>
              </div>
            </WorkHeader>
            <ul>
              <li>Front-end lead on the Pernament TSB new internet banking, working closely with Pernament TSB backend team.</li>
              <li>Front-end lead on the Liberty Insurance Ireland new website.</li>
              <li>Helping shipping the new Vodafone Ireland web site.</li>
            </ul>
          </Work>

          <Work>
            <Uppercase>Nov 2011 – Aug 2013</Uppercase>
            <Spacer height={10} />
            <WorkHeader>
              <img src="/perform.jpeg" />
              <div>
                <Company>
                  <a href="https://www.eachandother.com/">Perform Group</a>
                </Company>
                <Position>Web Developer - Kosice Slovakia</Position>
              </div>
            </WorkHeader>
            <ul>
              <li>
                Working on biggest live sport streaming service in UK. Adding new feature such as converting live flash player into html5 for mobile
                visitors and shipping new live sport portal.
              </li>
            </ul>
          </Work>
        </Content>
      </Wrap>
    </>
  )
}
