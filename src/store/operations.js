import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65a838f694c2c5762da87c67.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        console.log(response);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContacts = createAsyncThunk('contacts/addContacts', async (contact, thunkAPI) => {
    const { name, phone } = contact;
    try {
        console.log(name, phone);
        const response = await axios.post('/contacts', {
            name: name,
            phone: phone,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async (contactId, thunkAPI) => {
    try {
        console.log(contactId);
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

