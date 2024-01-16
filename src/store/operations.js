import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65a670dc74cf4207b4f00899.mockapi.io';

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
        const response = await axios.post('/contacts', {
            name: name,
            phone: phone,
        })
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`contacts/${contactId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

