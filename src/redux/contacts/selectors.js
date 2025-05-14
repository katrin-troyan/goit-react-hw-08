import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      const name = contact.name?.toLowerCase() || '';
      const number = String(contact.number || '');

      return (
        name.includes(normalizedFilter) || number.includes(normalizedFilter)
      );
    });
  }
);
