import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/aboutme.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Adeel and I’m a Full Stack Developer!" />
      </Thumbnail>
      <Details>
        <h2 style={{ fontSize: '40px', color: '#000000', lineHeight: '50px'}}>
         LET ME
         <br/>
         INTRODUCE
         <br/>
         MYSELF</h2>
        <p style={{ color: '#777777', fontSize: '15px', fontWeight: '400'}}>
          Bachelor of Computer Science with working expirience in JAVACRIPT, PHP, JQuery, React, Gatsby, JAVA, C#, ASP.Net, SQL, MySQL, interested in evolving technologies and data science.
        </p>
        <p style={{ color: '#777777', fontSize: '15px', fontWeight: '400'}}>
          I am eager to learn and be challenged in order to grow and improve my professional skills.
        </p>
        <a style={{ curser: 'pointer',boxShadow: '0px 10px 30px rgba(118, 85, 225, 0.3)', display: 'inline-block', color: '#fff', borderRadius: '5px', border: 'double 2px transparent', lineHeight: '46px',
          backgroundImage: 'linear-gradient(to right, #4458dc 0%, #854fee 100%), radial-gradient(circle at top left, #4458dc, #854fee)' }} href="https://madeeldev.github.io/Adeel_s_Curriculum_Vitae.pdf" target="__blank">
          <span style={{padding: '0 42px'}}>Download CV</span>
        </a>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
