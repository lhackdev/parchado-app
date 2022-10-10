import { useState } from 'react'
import { Card, Paper, DialogActions, Checkbox } from '@mui/material'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import {StatusColor} from './ColorStatus'
import moment from 'moment';

const TableDataGrid = ({ columns, data = [], isCheck = false, onSelectItem = null, onSelectAllItem = null, rowsSelected = [], rowCount = 0 }) => {
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleChangePage = (
    event,
    newPage,
  ) => {
    setPage(newPage);
  };

  const onSelectItemClick = (item) => {
    onSelectItem(item);
  }
  
  const onSelectAllClick = ({target}) => {
      onSelectAllItem(target);
  }

  const handleChangeRowsPerPage = (
    event,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSelected = (id) => {
    var row = rowsSelected.find(x => x.id == id);
    if(row !== undefined) return true;
    return false;
  };
  return (
    <Card sx={{ backgroundColor: '#fafafa' }}>
      <TableContainer component={Paper} sx={{ width: { xs: document.documentElement.scrollWidth - 40, sm: '100%' } }}>
        <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {isCheck &&
                (
                  <TableCell padding="checkbox"
                    className={'fondotitulotable'} >
                       <Checkbox
                          color="white"
                          indeterminate={rowsSelected.length > 0 && rowsSelected.length < rowCount}
                          checked={rowCount > 0 && rowsSelected.length === rowCount}
                          style={{color:"#FFFFFF"}}
                          onChange={onSelectAllClick}
                          inputProps={{
                            'aria-label': 'select all desserts',
                          }}
                        />
                  </TableCell>
                )
              }

              {columns.length > 0 && columns.map((item, index) => (
                <TableCell
                  key={index}
                  className={item?.colorcolumn && 'fondotitulotable'}
                  style={{ width: item?.width && item.width }}
                  align={item?.align ? item?.align : 'left'}
                >
                  {item.nameColumn}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              (rowsPerPage > 0
                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : data
              ).map((item, index) => {
                const isItemSelected = isSelected(item.id);
                const backColor = isCheck && StatusColor[item.status];
                return  (
                  <TableRow key={index}>
                    {isCheck &&
                      (
                        <TableCell style={{ backgroundColor:backColor }} padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            onChange={() => onSelectItemClick(item)}
                            inputProps={{
                              'aria-label': 'select all desserts',
                            }}
                          />
                        </TableCell>
                      )
                    }
  
                    {columns.length > 0 && columns.map((itemm, indexm) => (
                      <TableCell style={{ backgroundColor:backColor }} key={indexm} component="th" scope="row" align={itemm?.align ? itemm?.align : 'left'}>
                        {
                          itemm.namefield == "executionDate" || itemm.namefield == "date" ? moment(item[itemm.namefield]).format('YYYY/MM/DD') : item[itemm.namefield]
                        }
                      </TableCell>
                    ))}
                  </TableRow>
                )
              }
             )}
          </TableBody>
        </Table>
        <DialogActions>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 25, 50, { label: 'Todos', value: -1 }]}
            colSpan={3}
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                'aria-label': 'Filas por página',
              },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </DialogActions>
      </TableContainer>
    </Card>
  )
}

export default TableDataGrid