import { useState, useMemo } from 'react';
import { useEffect } from 'react';


export interface RealmStoreProps<T extends unknown> {
    get(): T;
    set: (newValue: T) => void;
    subscribe: (listenerFunc: Function) => void;
}

/* -------------------------------------------------------------------------- */
/*                             useMount                                       */
/* -------------------------------------------------------------------------- */

type TMountCallback = { <T>(): T, (): void }

const useMount = (cb: TMountCallback) =>
    useEffect(() => {
        cb();
    }, []);



/* -------------------------------------------------------------------------- */
/*                             useRealm                                       */
/* -------------------------------------------------------------------------- */
export const useRealm = <T extends unknown>(store: RealmStoreProps<T>): [T, Function] => {
    const [state, setGlobal] = useState<T>(store.get());

    useMount(() => {
        return store.subscribe(setGlobal);
    });

    const setState = useMemo(() => (state: T) => store.set(state), [store]);
    return [state, setState];
};





/* -------------------------------------------------------------------------- */
/*                             createRealm                                    */
/* -------------------------------------------------------------------------- */

export const createRealm = <T extends unknown>(initialData: T): RealmStoreProps<T> => {
    let listeners: Function[] = [];
    let value = initialData;

    /* Get Realm Value */
    const get = () => {
        return value;
    };

    /* Set Realm Value */
    const set = (newValue: T) => {
        if (value === newValue) return;
        value = newValue;
        listeners.forEach(listener => listener(value));
    };

    /* Unsubscribe from global listener */
    const unsubscribe = (listenerFunc: Function) => {
        listeners = listeners.filter(listener => listener !== listenerFunc);
    };

    /* Subscribe to global listener */
    const subscribe = (listenerFunc: Function) => {
        listeners.push(listenerFunc);
        return () => unsubscribe(listenerFunc);
    };

    return {
        get,
        set,
        subscribe,
    }
};
