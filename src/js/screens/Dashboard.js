import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import logo from '../images/TCLogo.png'
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Headline from 'grommet/components/Headline';
import Spinning from 'grommet/components/icons/Spinning';
import AddIcon from 'grommet/components/icons/base/Add';

import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';
import ToothFooter from '../components/ToothFooter';

import {
  loadDashboard, unloadDashboard
} from '../actions/dashboard';

import { pageLoaded } from './utils';

class Dashboard extends Component {
  componentDidMount() {
    pageLoaded('Dashboard');
    this.props.dispatch(loadDashboard());
  }

  componentWillUnmount() {
    this.props.dispatch(unloadDashboard());
  }

  render() {
    const { error, tasks } = this.props;
    const { intl } = this.context;

    let errorNode;
    let listNode;
    if (error) {
      errorNode = (
        <Notification
          status='critical'
          size='large'
          state={error.message}
          message='An unexpected error happened, please try again later'
        />
      );
    } else if (tasks.length === 0) {
      listNode = (
        <Box
          direction='row'
          responsive={false}
          pad={{ between: 'small', horizontal: 'medium', vertical: 'medium' }}
        >
          <Spinning /><span>Loading...</span>
        </Box>
      );
    } else {
      // const tasksNode = (tasks || []).map(task => (
      //   <ListItem
      //     key={`task_${task.id}`}
      //     justify='between'
      //   >
      //     <Label><Anchor path={`/tasks/${task.id}`} label={task.name} /></Label>
      //     <Box
      //       direction='row'
      //       responsive={false}
      //       pad={{ between: 'small' }}
      //     >
      //       <Value
      //         value={task.percentComplete}
      //         units='%'
      //         align='start'
      //         size='small'
      //       />
      //       <Meter value={task.percentComplete} />
      //     </Box>
      //   </ListItem>
      // ));
      //
      // listNode = (
      //   <List>
      //     {tasksNode}
      //   </List>
      // );
    }

    return (
      <Article className="dashboard" primary={true}>
        <Header size='large'>
          <NavControl />
          <Title>
            <a href="/">
              {/* <Image src={logo} size='thumb'/> */}Home
            </a>
          </Title>
          <Box flex={true} justify='end' direction='row' responsive={false}>

            <Menu icon={<AddIcon />} dropAlign={{
                "right" : "right"
              }}>
              <Anchor href='#' className='active'>
                + New Procedure
              </Anchor>
            </Menu>
          </Box>
        </Header>

        {errorNode}
        <Box pad='medium'>

          <Headline align="center" size="large">Procedures</Headline>
            <hr/>
          <Headline align="center" size="large">Inventory</Headline>
            {/* <UserList /> */}
          <ToothFooter className="navFooter"/>

        </Box>
      </Article>
    );
  }
}

Dashboard.defaultProps = {
  error: undefined,
  tasks: []
};

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

Dashboard.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.dashboard });

export default connect(select)(Dashboard);
