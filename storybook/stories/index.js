import React from 'react';

import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

import Welcome from './Welcome';
import ViewerStory from './ViewerStory';
import MethodsStory from './MethodsStory';

storiesOf('React SVG Diagram', module)
  .addDecorator(withKnobs)
  .add('README', () => <Welcome/>)
  .add('Viewer', () => <ViewerStory/>)
  .add('Methods', () => <MethodsStory/>)


