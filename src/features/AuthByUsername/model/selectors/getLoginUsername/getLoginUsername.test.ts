import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginIsError.test', () => {
    test('should return string', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'yura',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('yura');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {

        };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
