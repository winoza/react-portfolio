import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, <br />
        my name is Joshua
      </SectionTitle>
      <SectionText>
        Welcome to my Portfolio!
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/joshuaordaz/'}>Contact</Button>
    </LeftSection>
  </Section>
);

export default Hero;
