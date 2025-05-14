import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { toast } from 'react-hot-toast';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success(`Contact "${name}" deleted successfully!`);
        setIsModalOpen(false);
      })
      .catch(() => {
        toast.error(`Failed to delete contact "${name}".`);
      });
  };

  return (
    <>
      <li className={css.contactBox}>
        <div className={css.contactBoxIcon}>
          <p className={css.contactText}>{name}</p>
          <p className={css.contactText}>{number}</p>
        </div>
        <button
          className={css.contactBoxBtn}
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          Delete
        </button>
      </li>

      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-dialog-title" sx={{ color: '#0b3c3f' }}>
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="confirm-dialog-description"
            sx={{ color: '#0b3c3f' }}
          >
            Are you sure you want to delete <strong>{name}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="error">
            Yes
          </Button>
          <Button
            onClick={() => setIsModalOpen(false)}
            sx={{ color: '#0b3c3f' }}
            autoFocus
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
