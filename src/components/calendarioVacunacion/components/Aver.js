import React, { Component } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths
} from "date-fns";
import AddEventModal from '../add-event';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withTranslation } from "react-i18next";
import "./calendar.css";
import { addVacuna } from "../../../controller/miApp.controller"


const EVENT_LIMIT = 5;

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      eventToEdit: {}
    };
  }

  

  componentDidMount() {
    let events =
      localStorage.getItem("CalendarEvents") !== ("undefined" && null)
        ? JSON.parse(localStorage.getItem("CalendarEvents"))
        : [];
    this.setState({ events: events });
  }



  toggleModal = () => {
    const { showEventModal } = this.state;
    const newState = { showEventModal: !showEventModal };
    if (showEventModal) {
      newState.eventToEdit = {};
    }
    this.setState(newState);
  };


  handleFormSubmit = ({ date, id, title, hijos, lugar, time, dosis ,otro  }) => {

    const { selectedDate, events } = this.state;
    
    if (id) {
      const updatedEvent = {
        id,
        date, id, title, hijos, lugar, time, dosis ,otro
      };
      const eventIndex = events.findIndex(e => e.id === id);
      events.splice(eventIndex, 1, updatedEvent);
      this.setState({ events }, () => {
        this.toggleModal();
        const { events } = this.state;
        localStorage.setItem("CalendarEvents", JSON.stringify(events));
      });
    } else {
      const lastEvent = events[events.length - 1];
      const newEvent = {
        id: ((lastEvent && lastEvent.id) || 0) + 1,
        date, title, hijos, lugar, time, dosis ,otro
      };
      console.log('el new event',newEvent);
      const enviarDatos= async function()
      {
      let getRegistro = await addVacuna(newEvent)}
      enviarDatos()
      this.setState({ events: events.concat(newEvent) }, () => {
        this.toggleModal();
        const { events } = this.state;
        localStorage.setItem("CalendarEvents", JSON.stringify(events));
      });
    }
  };

  render() {
    const { showEventModal, eventToEdit } = this.state;
    return (
      <div className="calendar">
        <Button onClick= {(
          <AddEventModal
            toggleModal={this.toggleModal}
            handleFormSubmit={this.handleFormSubmit}
          />
        )}>
          Hola
          </Button>
      </div>
    );
  }
}
export default withTranslation()(Calendar);