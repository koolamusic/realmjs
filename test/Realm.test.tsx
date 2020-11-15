import React from 'react';
import Realm from '../src/index';
import renderer from 'react-test-renderer';

describe('realm ', () => {
    test('it renders', () => {
        const tree = renderer.create(<Realm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
