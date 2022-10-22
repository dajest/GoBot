<template>
  <div v-if="listView">
    <div class="create-button-block">
      <v-btn @click="listView = !listView" color="#272727">Create config</v-btn>
    </div>    
    <div class="configure-content-wrapper">
      <div class="last-stats-section dashboard-section">
        <div class="stats-headding">
          <h3>Existing config files</h3>
        </div>
  
        <div class="stats-table">
          <div class="table-headding">
            <div class="table-headding-column name">Config name</div>
            <div class="table-headding-column date">Actions</div>
            <div class="table-headding-column balance">Detailes</div>
          </div>
          <div class="table-content">
            <div class="table-content-line">
              <div class="name">
                <div class="name-content">
                  <span>Old-serv-bot-dog</span>
                </div>
                </div>
              <div class="date">
                <div class="date-content">
                  <div class="edit-config-btn">
                    <v-icon class="ml-2" small color="#272727">mdi-pencil</v-icon>
                    <span>Edit config</span>
                  </div>
  
                  <div class="delete-config-btn">
                    <v-icon class="ml-2" small>mdi-delete</v-icon>
                    <span>Delete config</span>
                  </div>                
                </div>
              </div>
  
              <div class="details">
                <v-expansion-panels flat class="details-expansion-pannel">
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <span class="title-droplink">Info</span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="data-line">
                        <div class="field">sport</div>
                        <div class="field-value">greyhound racing</div>
                      </div>
                      <div class="data-line">
                        <div class="field">market_type_code</div>
                        <div class="field-value">Win</div>
                      </div>                    
                      <div class="data-line">
                        <div class="field">traiding</div>
                        <div class="field-value">false</div>
                      </div>   
                      <div class="data-line">
                        <div class="field">market_matched</div>
                        <div class="field-value">1000</div>
                      </div>   
                      <div class="data-line">
                        <div class="field">unteel_start</div>
                        <div class="field-value">3</div>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </div>      
            <div class="table-content-line">
              <div class="name">
                <div class="name-content">
                  <span>Old-serv-bot-dog</span>
                </div>
                </div>
              <div class="date">
                <div class="date-content">
                  <div class="edit-config-btn">
                    <v-icon class="ml-2" small color="#272727">mdi-pencil</v-icon>
                    <span>Edit config</span>
                  </div>
  
                  <div class="delete-config-btn">
                    <v-icon class="ml-2" small>mdi-delete</v-icon>
                    <span>Delete config</span>
                  </div>                
                </div>
              </div>
  
              <div class="details">
                <v-expansion-panels flat class="details-expansion-pannel">
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <span class="title-droplink">Info</span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="data-line">
                        <div class="field">sport</div>
                        <div class="field-value">greyhound racing</div>
                      </div>
                      <div class="data-line">
                        <div class="field">market_type_code</div>
                        <div class="field-value">Win</div>
                      </div>                    
                      <div class="data-line">
                        <div class="field">traiding</div>
                        <div class="field-value">false</div>
                      </div>   
                      <div class="data-line">
                        <div class="field">market_matched</div>
                        <div class="field-value">1000</div>
                      </div>   
                      <div class="data-line">
                        <div class="field">unteel_start</div>
                        <div class="field-value">3</div>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </div>   
            <div class="table-content-line">
              <div class="name">
                <div class="name-content">
                  <span>Old-serv-bot-dog</span>
                </div>
                </div>
              <div class="date">
                <div class="date-content">
                  <div class="edit-config-btn">
                    <v-icon class="ml-2" small color="#272727">mdi-pencil</v-icon>
                    <span>Edit config</span>
                  </div>
  
                  <div class="delete-config-btn">
                    <v-icon class="ml-2" small>mdi-delete</v-icon>
                    <span>Delete config</span>
                  </div>                
                </div>
              </div>
  
              <div class="details">
                <v-expansion-panels flat class="details-expansion-pannel">
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <span class="title-droplink">Info</span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="data-line">
                        <div class="field">sport</div>
                        <div class="field-value">greyhound racing</div>
                      </div>
                      <div class="data-line">
                        <div class="field">market_type_code</div>
                        <div class="field-value">Win</div>
                      </div>                    
                      <div class="data-line">
                        <div class="field">traiding</div>
                        <div class="field-value">false</div>
                      </div>   
                      <div class="data-line">
                        <div class="field">market_matched</div>
                        <div class="field-value">1000</div>
                      </div>   
                      <div class="data-line">
                        <div class="field">unteel_start</div>
                        <div class="field-value">3</div>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </div>   
            <div class="table-content-line">
              <div class="name">
                <div class="name-content">
                  <span>Old-serv-bot-dog</span>
                </div>
                </div>
              <div class="date">
                <div class="date-content">
                  <div class="edit-config-btn">
                    <v-icon class="ml-2" small color="#272727">mdi-pencil</v-icon>
                    <span>Edit config</span>
                  </div>
  
                  <div class="delete-config-btn">
                    <v-icon class="ml-2" small>mdi-delete</v-icon>
                    <span>Delete config</span>
                  </div>                
                </div>
              </div>
  
              <div class="details">
                <v-expansion-panels flat class="details-expansion-pannel">
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <span class="title-droplink">Info</span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="data-line">
                        <div class="field">sport</div>
                        <div class="field-value">greyhound racing</div>
                      </div>
                      <div class="data-line">
                        <div class="field">market_type_code</div>
                        <div class="field-value">Win</div>
                      </div>                    
                      <div class="data-line">
                        <div class="field">traiding</div>
                        <div class="field-value">false</div>
                      </div>   
                      <div class="data-line">
                        <div class="field">market_matched</div>
                        <div class="field-value">1000</div>
                      </div>   
                      <div class="data-line">
                        <div class="field">unteel_start</div>
                        <div class="field-value">3</div>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </div>                                                  
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="new-bot-content" v-else>
    <div class="new-bot-name-block">
      <h4 class="label">Bot name</h4>
      <div class="edit-bot-name">Old-serv-bot-dog</div>
    </div>
    <div class="bot-config-sections-block">
      <div class="bot-config-section">
        <v-expansion-panels flat>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="bot-config-section-heading">Bot config</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="bot-config-section-content">
                <div class="bot-name-field field">
                  <div class="label">Enter your bot name</div>
                  <v-text-field class="bot-name-input input-anulizer" outlined dense></v-text-field>
                </div>
                <div class="start-time-field field">
                  <div class="label">Start time for bot</div>
                  <v-dialog
                    ref="startTimeDialog"
                    v-model="botStartTimeDialog"
                    :return-value.sync="botStartTime"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        class="input-anulizer start-time-input"
                        v-model="botStartTime"
                        placeholder="-- : --"
                        append-icon="mdi-clock"
                        dense
                        readonly
                        outlined
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="botStartTimeDialog"
                      v-model="botStartTime"
                      full-width
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="botStartTimeDialog = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.startTimeDialog.save(botStartTime)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                </div>      
                
                <div class="end-time-field field">
                  <div class="label">Stop time for bot</div>
                  <v-dialog
                    ref="stopTimeDialog"
                    v-model="botStopTimeDialog"
                    :return-value.sync="botStopTime"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        class="input-anulizer stop-time-input"
                        v-model="botStopTime"
                        placeholder="-- : --"
                        append-icon="mdi-clock"
                        dense
                        readonly
                        outlined
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="botStopTimeDialog"
                      v-model="botStopTime"
                      full-width
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="botStopTimeDialog = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.stopTimeDialog.save(botStopTime)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                </div>                 
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>        
      </div>

      <div class="bot-config-section finance-config">
        <v-expansion-panels flat>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="bot-config-section-heading">Finance config</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="finance-config-section-content">
                <div class="stop-loss-field field">
                  <div class="label">Stop loss</div>
                  <v-text-field class="stop-loss-input input-anulizer finance-config-field" outlined dense></v-text-field>
                </div>

                <div class="stop-win-field field">
                  <div class="label">Stop win</div>
                  <v-text-field class="stop-win-input input-anulizer finance-config-field" outlined dense></v-text-field>
                </div>      

                <div class="simulate-balance-field field">
                  <div class="label">Simulate balance</div>
                  <v-text-field class="simulate-balance-input input-anulizer finance-config-field" outlined dense></v-text-field>
                </div>           
                
                <div class="bet-proc-field field">
                  <div class="label">bet proc</div>
                  <v-text-field class="bet-proc-input input-anulizer finance-config-field" outlined dense></v-text-field>
                </div>   

              </div>
              <div class="finance-config-section-content flex-start">
                <div class="label">Mardza</div>
                <v-checkbox
                  class="marzha-checkbox input-anulizer"
                  v-model="marzha"
                  :ripple="false"
                  :label="`${marzha? 'Da' : 'Net'}`"
                  color="#59A372"
                ></v-checkbox>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>        
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    name: 'ConfigureView',
    components: {
    },
    data: () => ({
      listView: true,
      botStartTimeDialog: false,
      botStartTime: '',
      botStopTimeDialog: false,
      botStopTime: '',
      marzha: false,
    }),
  }
</script>


<style lang="scss">
.create-button-block {
  padding: 0 60px 15px 40px;

  .v-btn__content {
      width: 162px;
      border-radius: 5px;
      font-weight: 600;
      font-size: 11px;
      line-height: 16px;
      text-align: center;
      text-transform: uppercase;
      color: #FFFFFF;      
  }
}
.configure-content-wrapper {
  padding: 0 60px 30px 40px;

  .table-content-line .details {
    width: 50%;
  }

  .data-line {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;  
  }

  .field {
    font-weight: 400;
    font-size: 12px;
    line-height: 26px;
    color: #272727;
  }
  .field-value {
    font-weight: 300;
    font-size: 12px;
    line-height: 26px;
    color: #272727;
  }  
}

.edit-config-btn {
  cursor: pointer;
  margin-bottom: 20px;
  .v-icon {
    margin-right: 8px;
  }
}

.delete-config-btn {
  cursor: pointer;
 
  .v-icon {
    margin-right: 8px;
    color: #BF1616;
  }

  span {
    color: #BF1616;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
  }
}

// NEW-EDIT


.new-bot-content {
  padding: 0 60px 30px 40px;
  .new-bot-name-block {
    display: flex;
    margin-bottom: 40px;

    .label {
      font-weight: 300;
      font-size: 12px;
      line-height: 18px;
      color: #272727;
      margin-right: 28px;
    }

    .edit-bot-name {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #272727;
    }
  }
}


.bot-config-section {
  padding: 20px 40px 20px 10px;
  border: 0.3px solid #272727;
  border-radius: 5px;
  margin-bottom: 12px;

  &.finance-config {
    .finance-config-field {
      width: 116px;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }

  &-heading {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #272727;
  }

  &-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-right: 80px;

    .field {
      display: flex;
      align-items: center;
    }

    .label {
      font-weight: 300;
      font-size: 12px;
      line-height: 18px;
      color: #272727;
      margin-right: 20px;
    }

    .bot-name-input {
      border-radius: 5px;      
    }

    .start-time-input, .stop-time-input {
      width: 100px;
    }
  }
}


.finance-config-section-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;

  &:last-child {
    margin-bottom: 0; 
  }

  &.flex-start {
    justify-content: flex-start;
  }

  .field {
      display: flex;
      align-items: center;
    }

  .label {
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    color: #272727;
    margin-right: 20px;
  }
  .marzha-checkbox {
    margin-top: 0;
    padding-top: 0;

    .v-messages {
      display: none;
    }

    label {
      font-weight: 300;
      font-size: 12px;
      line-height: 18px;
      color: #272727;
      margin-right: 20px;
    }
  }
}
</style>