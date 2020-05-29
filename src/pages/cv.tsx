import React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import { FiPhone, FiCompass, FiGithub, FiMail, FiTwitter } from 'react-icons/fi'

const SIDEBAR_COLOR = '#304656'

const Wrap = styled.div`
  max-width: 840px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 270px 1fr;
  font-size: 16px;
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
`

const Sidebar = styled.div`
  background: ${SIDEBAR_COLOR};
  color: white;
  padding: 40px;
  min-height: 100vh;
`

const Content = styled.div`
  background: white;
  padding: 40px;
  min-height: 100%;

  ul {
    margin: 10px 0 0;
    padding-left: 18px;
    font-size: 15px;
  }

  li + li {
    margin-top: 5px;
  }
`

const Profile = styled.img`
  border-radius: 5px;
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
  margin: 40px 0 20px;
  letter-spacing: 1px;
  font-weight: 500;
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

const Small = styled.div`
  font-size: 14px;
`

const Uppercase = styled.div`
  text-transform: uppercase;
`

const Year = styled.h4`
  margin: -4px 0 0;
  font-size: 15px;
  font-weight: 300;
  text-transform: uppercase;
`

const Position = styled.h4`
  font-size: 18px;
  margin: 5px 0;
  font-weight: 400;
  line-height: 1;
`

const PositionHeader = styled.div`
  margin: 40px 0 0;
  display: grid;
  grid-template-columns: 50px 1fr;

  img {
    border-radius: 5px;
  }
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

          <div>Engineer's degree</div>
        </Sidebar>
        <Content>
          <H1>Daniel Husar</H1>
          <H3>Full stack engineer focusing on building beautiful UIs.</H3>

          <ContentH2>Experience</ContentH2>
          <HR width="100" />

          <PositionHeader>
            <img src="/intercom.svg" width="40" />
            <div>
              <Year>
                Aug 2016 - Present &nbsp;•&nbsp; <a href="https://www.intercom.com/">Intercom</a>
              </Year>
              <Position>Product Engineer - San Francisco, California</Position>
            </div>
          </PositionHeader>
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

          <PositionHeader>
            <img src="/slovensko-digital.png" width="40" />
            <div>
              <Year>
                May 2019 - Present &nbsp;•&nbsp; <a href="https://slovensko.digital/">Slovensko Digital</a>
              </Year>
              <Position>Full stack Engineer - San Francisco, California</Position>
            </div>
          </PositionHeader>

          <ul>
            <li>Tech lead on the online application project that helped people to vote in the last parliament elections.</li>
          </ul>

          <PositionHeader>
            <img src="/intercom.svg" width="40" />
            <div>
              <Year>
                Sep 2014 - Aug 2016 &nbsp;•&nbsp; <a href="https://www.intercom.com/">Intercom</a>
              </Year>
              <Position>Product Engineer - Dublin, Ireland</Position>
            </div>
          </PositionHeader>
          <ul>
            <li>Front-end lead on the Intercom help center articles product.</li>
            <li>Working closely with gtm, marketing and sales teams.</li>
          </ul>

          <PositionHeader>
            <img src="/each-and-other.png" width="40" />
            <div>
              <Year>
                Sep 2013 - Sep 2014 • <a href="https://www.eachandother.com/">Each and Other</a>
              </Year>
              <Position>Front-end Engineer - Dublin, Ireland</Position>
            </div>
          </PositionHeader>
          <ul>
            <li>Front-end lead on the Pernament TSB new internet banking.</li>
            <li>Front-end lead on the Liberty Insurance Ireland new website.</li>
            <li>Helping shipping the new Vodafone Ireland site.</li>
          </ul>

          <PositionHeader>
            <img src="/perform.jpeg" width="40" />
            <div>
              <Year>
                Nov 2011 – Aug 2013 &nbsp;•&nbsp; <a href="https://www.eachandother.com/">Perform Group</a>
              </Year>
              <Position>Web Developer - Kosice Slovakia</Position>
            </div>
          </PositionHeader>

          <ul>
            <li>Working on biggest live sport streaming service in UK.</li>
          </ul>
        </Content>
      </Wrap>
    </>
  )
}
