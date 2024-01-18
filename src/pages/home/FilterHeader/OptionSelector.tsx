import * as React from "react";
import {
  Button,
  Dialog,
  ListItemText,
  ListItem,
  List,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
} from '@mui/material';






import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { styled } from "@mui/material";
import { motion } from "framer-motion"
import _ from "lodash";

interface IOption {
  label: string;
  value: string;
}

interface IOptionSelector {
  category: string;
  value: string;
  onSelect: (value) => void;
  onClear: () => void;
  options: Array<IOption>;
  placeholder: string;
  isSticky?: boolean;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledButton = styled(Button)(({ color }) => ({
  ...color == 'primary' ? { backgroundColor: '#f3f4f6', } : {},
  transition: 'background-color 0.3s, width 0.3s',
  '&:hover': {
    backgroundColor: '#f3f4f6',
    '& .contentContainer': {
      // height: '100%',
    },
  },
}));

export default function OptionSelector({
  category,
  value,
  onSelect,
  onClear,
  options,
  placeholder,
  isSticky
}: IOptionSelector) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment
      key={category}
    >
      <StyledButton
        color={value ? "primary" : "secondary"}
        className="w-full  lg:w-1/3" onClick={handleClickOpen}>
        <motion.div

          animate={{
            paddingTop: isSticky ? "2rem" : "0rem",
            paddingBottom: isSticky ? "2rem" : "0rem",
            flexDirection: !isSticky ? "row" : "column"
          }}
          transition={{
            type: "tween",
            duration: 0.25,
          }}
          className="flex items-center justify-center">
          <motion.div
            animate={{
              paddingRight: !isSticky ? "0.25rem" : 0
            }}
            className="font-medium text-sm text-black">{category}</motion.div >
          <div className="font-bold text-black">
            {value ? value : placeholder}
          </div>
        </motion.div>
      </StyledButton>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", background: "#a1a1aa" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <div className="flex items-center">
              <Typography sx={{ ml: 2, flex: 1, fontSize: '1rem' }} variant="h6" component="div">
                Select {_.capitalize(category)}
              </Typography>
              <Button
                autoFocus
                color="inherit"
                onClick={() => {
                  onClear();
                  handleClose();
                }}
              >
                Remove Selection
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <div className="flex flex-row w-full justify-between">
          <List sx={{ width: "100%" }}>
            {options.map((option) => {
              return (
                <ListItem
                  onClick={() => {
                    onSelect(option.value);
                    handleClose();
                  }}
                >
                  <ListItemText primary={option.label} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
