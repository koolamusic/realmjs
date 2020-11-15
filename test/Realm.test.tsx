import React from 'react';
import { useRealm, createRealm } from '../src/index';
import renderer from 'react-test-renderer';


export const COUNTER = createRealm<number>(0);
const AppWithRealm = () => {
    const [state, setState] = useRealm<number>(COUNTER);
    return (
        <React.Fragment>
            <h1>Use Realm Example</h1>
            <h3>{state}</h3>
            <section>
                <button onClick={() => setState(state + 1)}>+</button>
                <button onClick={() => setState(state - 1)} disabled={state === 0}>-</button>
            </section>
        </React.Fragment>
    );
}
describe('realm ', () => {
    test('it renders', () => {

        const tree = renderer.create(<AppWithRealm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
