import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import FractionSum from '../lib/fractionSum';

describe('<FractionSum />', function() {

    it('Franction Addition :  1/2 + 1/3 =  Answer should be 5/6', function () {
        const wrapper = mount(<FractionSum />);
        wrapper.setState({first : '1', second : '2', third : '1', forth : '3'});
        wrapper.find('button').simulate('click');

        expect(wrapper.state('answerFranctionSum')).to.equal('5/6')
    });

    it('Franction Addition :  1/5 + 2/5 =  Answer should be 3/5', function () {
        const wrapper = mount(<FractionSum />);
        wrapper.setState({first : '1'});
        wrapper.setState({second : '5'});
        wrapper.setState({third : '2'});
        wrapper.setState({forth : '5'});
        wrapper.find('button').simulate('click');

        expect(wrapper.state('answerFranctionSum')).to.equal('3/5')
    });

    it('Franction Addition :  3/4 + 3/4 =  Answer should be 3/2', function () {
        const wrapper = mount(<FractionSum />);
        wrapper.setState({first : '3'});
        wrapper.setState({second : '4'});
        wrapper.setState({third : '3'});
        wrapper.setState({forth : '4'});
        wrapper.find('button').simulate('click');

        expect(wrapper.state('answerFranctionSum')).to.equal('3/2')
    });

    it('Franction Addition :  7/5 + 12/5 =  Answer should be 19/5', function () {
        const wrapper = mount(<FractionSum />);
        wrapper.setState({first : '7'});
        wrapper.setState({second : '5'});
        wrapper.setState({third : '12'});
        wrapper.setState({forth : '5'});
        wrapper.find('button').simulate('click');

        expect(wrapper.state('answerFranctionSum')).to.equal('19/5')
    });

    it('Franction Addition :  4/0 + 1/5 =  Answer should be Cannot divide by 0', function () {
        const wrapper = mount(<FractionSum />);
        wrapper.setState({first : '4'});
        wrapper.setState({second : '0'});
        wrapper.setState({third : '1'});
        wrapper.setState({forth : '5'});
        wrapper.find('button').simulate('click');

        expect(wrapper.state('answerFranctionSum')).to.equal('Cannot divide by 0')
    });

    it('Franction Addition :  3/8 + -1/2 =  Answer should be 1/8', function () {
        const wrapper = mount(<FractionSum />);
        wrapper.setState({first : '3'});
        wrapper.setState({second : '8'});
        wrapper.setState({third : '-1'});
        wrapper.setState({forth : '2'});
        wrapper.find('button').simulate('click');

        expect(wrapper.state('answerFranctionSum')).to.equal('1/8')
    });

    // it("test should stub method differently on consecutive calls", function () {
    //     var callback = sinon.stub();
    //     callback.onCall(0).returns(1);
    //     callback.onCall(1).returns(2);
    //     callback.returns(3);

    //     callback(); // Returns 1
    //     callback(); // Returns 2
    //     callback(); // All following calls return 3
    // })

});