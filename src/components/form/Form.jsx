import React, {useState} from 'react';
import './Form.css';
import TextField from '@mui/material/TextField';
import {inputLabelClasses} from "@mui/material/InputLabel";
import Box from "@mui/material/Box";


const Form = ({showForm}) => {
  return (
    <div className={`form_wrap ${showForm ? 'visible' : ''}`}>
      <div className="form_container">
        <h2 className="form_title">Заполните форму</h2>
        <div className="application_form">
          <div className="form_fields">
            <div>
              <Box sx={{border: '5px solid #66299c', borderRadius: '5.72px', width: '403px'}}>
                <TextField
                  label="Имя"
                  style={{color: "white"}}
                  defaultValue="Иван"
                  color="secondary"
                  id="field"
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "red",
                      [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "white",
                        fontSize: "31.54px",
                        lineHeight: "61.33px",
                        marginTop: '-18px',
                      }
                    }
                  }}
                  InputProps={{
                    style: {
                      width: '400px'
                    }
                  }}
                  focused
                />
              </Box>
            </div>
            <div>
              <Box sx={{border: '5px solid #66299c', borderRadius: '5.72px', width: '403px'}}>
                <TextField
                  label="Фамилия"
                  defaultValue="Иванов"
                  color="secondary"
                  id="field"
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "red",
                      [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "white",
                        fontSize: "31.54px",
                        lineHeight: "61.33px",
                        marginTop: '-18px',
                      }
                    }
                  }}
                  InputProps={{
                    style: {
                      width: '400px'
                    }
                  }}
                  focused
                />
              </Box>
            </div>
          </div>
          <div className="form_fields">
            <div>
              <Box sx={{border: '5px solid #66299c', borderRadius: '5.72px', width: '403px'}}>
                <TextField
                  label="Отчество"
                  style={{color: "white"}}
                  defaultValue="Иванович"
                  color="secondary"
                  id="field"
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "red",
                      [`&.${inputLabelClasses.shrink}`]: {
                        color: "white",
                        fontSize: "31.54px",
                        lineHeight: "61.33px",
                        marginTop: '-18px',
                      }
                    }
                  }}
                  InputProps={{
                    style: {
                      width: '400px'
                    }
                  }}
                  focused
                />
              </Box>
            </div>
            <div>
              <Box sx={{border: '5px solid #66299c', borderRadius: '5.72px', width: '403px'}}>
                <TextField
                  label="Дата рождения"
                  defaultValue="01.01.1991"
                  color="secondary"
                  id="field"
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "red",
                      [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "white",
                        fontSize: "31.54px",
                        lineHeight: "61.33px",
                        marginTop: '-18px',
                      }
                    }
                  }}
                  InputProps={{
                    style: {
                      width: '400px'
                    }
                  }}
                  focused
                />
              </Box>
            </div>

          </div>
          <div className="form_fields">
            <div>
              <Box sx={{border: '5px solid #66299c', borderRadius: '5.72px', width: '403px'}}>
                <TextField
                  label="Серия паспорта"
                  style={{color: "white"}}
                  defaultValue="00 00"
                  color="secondary"
                  id="field"
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "red",
                      [`&.${inputLabelClasses.shrink}`]: {
                        color: "white",
                        fontSize: "31.54px",
                        lineHeight: "61.33px",
                        marginTop: '-18px',
                      }
                    }
                  }}
                  InputProps={{
                    style: {
                      width: '400px'
                    }
                  }}
                  focused
                />
              </Box>
            </div>
            <div>
              <Box sx={{border: '5px solid #66299c', borderRadius: '5.72px', width: '403px'}}>
                <TextField
                  label="Номер паспорта"
                  defaultValue="00000"
                  color="secondary"
                  id="field"
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "red",
                      [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "white",
                        fontSize: "31.54px",
                        lineHeight: "61.33px",
                        marginTop: '-18px',
                      }
                    }
                  }}
                  InputProps={{
                    style: {
                      width: '400px'
                    }
                  }}
                  focused
                />
              </Box>
            </div>
          </div>
          <div className="form_fields">
            <div>
              <Box sx={{border: '5px solid #66299c', borderRadius: '5.72px', width: '403px'}}>
                <TextField
                  label="ИНН"
                  style={{color: "white"}}
                  defaultValue="0000000000"
                  color="secondary"
                  id="field"
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "red",
                      [`&.${inputLabelClasses.shrink}`]: {
                        color: "white",
                        fontSize: "31.54px",
                        lineHeight: "61.33px",
                        marginTop: '-18px',
                      }
                    }
                  }}
                  InputProps={{
                    style: {
                      width: '400px'
                    }
                  }}
                  focused
                />
              </Box>
            </div>
            <div>
              <Box sx={{border: '5px solid #66299c', borderRadius: '5.72px', width: '403px'}}>
                <TextField
                  label="Снилс"
                  defaultValue="000-000-000-00"
                  color="secondary"
                  id="field"
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "red",
                      [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "white",
                        fontSize: "31.54px",
                        lineHeight: "61.33px",
                        marginTop: '-18px',
                      }
                    }
                  }}
                  InputProps={{
                    style: {
                      width: '400px'
                    }
                  }}
                  focused
                />
              </Box>
            </div>
          </div>
          <div className="form_fields">
            <div>
              <Box sx={{border: '5px solid #66299c', borderRadius: '5.72px', width: '403px'}}>
                <TextField
                  label="Адрес недвижимости"
                  style={{color: "white"}}
                  defaultValue="ул. Кузнецова 3"
                  color="secondary"
                  id="field"
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "red",
                      [`&.${inputLabelClasses.shrink}`]: {
                        color: "white",
                        fontSize: "31.54px",
                        lineHeight: "61.33px",
                        marginTop: '-18px',
                      }
                    }
                  }}
                  InputProps={{
                    style: {
                      width: '400px'
                    }
                  }}
                  focused
                />
              </Box>
            </div>
            <div>
              <Box sx={{border: '5px solid #66299c', borderRadius: '5.72px', width: '403px'}}>
                <TextField
                  label="Тип"
                  defaultValue="Апартаменты"
                  color="secondary"
                  id="field"
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "red",
                      [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "white",
                        fontSize: "31.54px",
                        lineHeight: "61.33px",
                        marginTop: '-18px',
                      }
                    }
                  }}
                  InputProps={{
                    style: {
                      width: '400px'
                    }
                  }}
                  focused
                />
              </Box>
            </div>
          </div>
          <div className="form_fields" style={{display: 'flex', justifyContent: "center", flexDirection: "column"}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Box sx={{border: '5px solid #66299c', borderRadius: '5.72px', width: '403px'}}>
                <TextField
                  label="Номер телефона"
                  style={{color: "white"}}
                  defaultValue="+7 (777) 585 55-88"
                  color="secondary"
                  id="field"
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "red",
                      [`&.${inputLabelClasses.shrink}`]: {
                        color: "white",
                        fontSize: "31.54px",
                        lineHeight: "61.33px",
                        marginTop: '-18px',
                      }
                    }
                  }}
                  InputProps={{
                    style: {
                      width: '400px'
                    }
                  }}
                  focused
                />
              </Box>
            </div>
          </div>
          <div className="btn_wrap">
            <button className="form_btn">Получить деньги</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;




