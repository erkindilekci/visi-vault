import axios from 'axios';

const API_URL = 'https://visivaultapi.erkindilekci.me/contacts';

export const saveContact = async (contact) =>
    await axios.post(API_URL, contact);

export const getContacts = async (page = 0, size = 10) =>
    await axios.get(`${API_URL}?page=${page}&size=${size}`);

export const getContact = async (id) => await axios.get(`${API_URL}/${id}`);

export const updateContact = async (contact) =>
    await axios.post(API_URL, contact);

export const updatePhoto = async (formData) =>
    await axios.put(`${API_URL}/photo`, formData);

export const deleteContact = async (id) =>
    await axios.delete(`${API_URL}/${id}`);
