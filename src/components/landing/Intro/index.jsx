import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h3 style={{fontWeight: '550', fontSize: '30px'}}>Hi There!</h3>
				<h1 style={{fontWeight: '600', fontSize: '60px'}}>I’m Adeel</h1>
				<h4>Full Stack Developer!</h4>
				<Button as={AnchorLink} href="#contact">
					Contact me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Adeel and I’m a Full Stack Developer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
