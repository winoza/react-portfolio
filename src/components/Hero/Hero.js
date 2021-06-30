import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, <br />
        my name is Aldwin
      </SectionTitle>
      <SectionText>
        I am a Full-stack Web Developer leveraging background in health science and occupational therapy 
        to provide unique perspectives on how end-users interact with websites and software platforms. 
      </SectionText>
      <Button onClick={() => window.location = ''}>Contact</Button>
    </LeftSection>
  </Section>
);

export default Hero;