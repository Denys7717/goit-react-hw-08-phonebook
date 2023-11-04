import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => {
  return state.contacts.contacts;
};
export const selectorFilter = state => state.contacts.filter;

export const selectorFilteredProducts = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) =>
    contacts
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts
);
