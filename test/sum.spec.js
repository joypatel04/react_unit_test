import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Sum from '../lib/sum';

describe('<Sum />', function() {
    it('Addition of :  0 + 0 =  Answer should be 0', function () {
        const wrapper = mount(<Sum />);
        wrapper.setState({firstValue : '0'});
        wrapper.setState({secondValue : '0'});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('answerSum')).to.equal('0')
    });

    it('Addition of :  3 + 4 =  Answer should be 7', function () {
        const wrapper = mount(<Sum />);
        wrapper.setState({firstValue : '3'});
        wrapper.setState({secondValue : '4'});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('answerSum')).to.equal('7')
    });

    it('Addition of :  3 + 4 =  Answer should be 7', function () {
        const wrapper = mount(<Sum />);
        wrapper.setState({firstValue : '3'});
        wrapper.setState({secondValue : '4'});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('answerSum')).to.equal('7')
    });
});