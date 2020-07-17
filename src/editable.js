import React from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  {
    root: 
    {
      position: "absolute",
      right: '.20em',
      top:'4em',
      width: '90%',
      overflowX: 'auto',
    },
    table: 
    {
      minWidth: 700,
    },
  }
);

const tableIcons = 
{
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function MaterialTableDemo() 
{
  const classes = useStyles();

  const [state, setState] = React.useState(
    {
      columns:
        [
          { title: 'Дата', field: 'date' },
          { title: 'Часы занятий', field: 'hours' },
          { title: 'Факультет', field: 'faculty' },
          { title: 'Курс', field: 'course' },
          { title: 'Группа', field: 'group' },
          { title: 'Количество студентов', field: 'numberofstudents' },
          { title: 'Лекции', field: 'lections' },
          { title: 'Практические занятия', field: 'practics' },
          { title: 'Лабораторные занятия', field: 'labs' },
          { title: 'Консультации', field: 'cosultations' },
          { title: 'Экзамены', field: 'exams' },
          { title: 'Зачеты', field: 'marks' },
          { title: 'Практика(НИР)', field: 'practic' },
          { title: 'Курсовое проект-ие, курсовые работы', field: 'coursework' },
          { title: 'ВКР, НКР, руководство магистрантами, аспирантами', field: 'vkr' },
          { title: 'Руководство кафедрой, программой', field: 'leading' },
          { title: 'ГЭК', field: 'gek' },
          { title: 'Прочие', field: 'others' },
          { title: 'Итого', field: 'total' },
        ],
      data: 
        [
          { date: '03.09.2019', hours: '8:00-9:35; 9:50-11:25', course: '3', group: '42,184,185,187,190', lections: 2, labs: 2, total: 4  },
          { name: 'Валидол', surname: 'Препарат с рефлекторным сосудорасширяющим действием', company: 'Farma', saveplace: 2, unit: 68 },
          { name: 'Бромгексин', surname: 'Препарат, оказывающий муколитическое, отхаркивающее и слабое противокашлевое действие', company: 'Pfizer', saveplace: 3, unit: 63 },
        ],
    }
  );

  return (
    <div className={classes.root}>
    <MaterialTable 
    icons = {tableIcons}
      title=""
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    /></div>
  );
}