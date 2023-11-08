import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/thunks';
import { updateContactThunk } from 'store/thunks';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';

export default function ContactListItem({ contact: { name, number, id } }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);

  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditMode(prev => !prev);
  };
  useEffect(() => {
    if (!isEditMode && (name !== editName || number !== editNumber)) {
      dispatch(
        updateContactThunk({
          id,
          name: editName,
          number: editNumber,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode]);

  const handleChange = ({ target }) => {
    if (target.name === 'editName') {
      setEditName(target.value);
      return;
    }
    setEditNumber(target.value);
  };
  return (
    <>
      <Card>
        {isEditMode ? (
          <CardContent>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              onChange={handleChange}
              type="text"
              name="editName"
              value={editName}
            ></TextField>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              onChange={handleChange}
              type="text"
              name="editPhone"
              value={editNumber}
            ></TextField>
          </CardContent>
        ) : (
          <CardContent>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="subtitle1"> {number}</Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-emoji-sunglasses-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.22 4.22 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A2.99 2.99 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM4.969 9.75A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z" />
            </svg>
          </CardContent>
        )}
        <CardActions>
          <Button size="small" type="button" onClick={handleEdit}>
            {isEditMode ? <SaveIcon /> : <EditIcon />}
          </Button>
          <Button
            size="small"
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            <DeleteForeverIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
