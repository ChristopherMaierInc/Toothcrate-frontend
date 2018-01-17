import React, {Component} from 'react';

import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'

class ToothFooter extends Component {
  render() {
    return (<div className="Footer">

      <Footer justify='between'>
        <Title>
          <s/>
          <a href="/">Toothecrate
          </a>
        </Title>
        <Box direction='row' align='center' pad={{
            "between" : "medium"
          }}>
          <Paragraph margin='none'>
            © 2017-2018 Invent/Story
          </Paragraph>
          <Menu direction='row' size='small' dropAlign={{
              "right" : "right"
            }}>
            <Anchor href='#'>
              Support
            </Anchor>
            <Anchor href='#'>
              Contact
            </Anchor>
            <Anchor href='#'>
              About
            </Anchor>
          </Menu>
        </Box>
      </Footer>
    </div>)
  }
}

export default ToothFooter;
