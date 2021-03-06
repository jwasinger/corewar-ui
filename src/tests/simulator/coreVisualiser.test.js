
import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import { PureCoreVisualiser } from './../../containers/simulator/coreVisualiser'
import CoreLocation from './../../components/simulator/coreLocation'
import FontAwesome from 'react-fontawesome'

it('renders without crashing', () => {
  shallow(<PureCoreVisualiser />)
});

it('renders one coreLocation per instruction', () => {

  const props = {
    coreInfo: [{
      instruction: { address: 0 },
      access: { warriorId: 0 }
    },
    {
      instruction: { address: 1 },
      access: { warriorId: 1 }
    }]
  }

  const wrapper = shallow(<PureCoreVisualiser {...props}/>)

  expect(wrapper.find(CoreLocation).length).to.equal(props.coreInfo.length)
});

