<template>
  <div class="runbot-content-wrapper">
    <div class="betfair-login-block">
      <h3 class="login-block-title">Enter information for bot running</h3>
      <div class="login-details-block">
        <div class="username-block">
          <div class="label">Betfair username</div>
          <v-text-field class="username-input" outlined dense />
        </div>
        <div class="passsword-block">
          <div class="label">Betfair password</div>
          <v-text-field class="password-input" type="password" outlined dense />   
        </div>
        <div class="betfair-api-block">
          <div class="label">Betfair API</div>
          <v-text-field class="betfair-api-input" outlined dense />        
        </div>
      </div>
    </div>

    <div class="started-bots-section dashboard-section runbot-screen">
      <div class="started-bots-headding">
        <h3>Started botsЫ</h3>
        <div class="allowed-bot-amount">*you  can run 3 bot(s)</div>      
      </div>

      <div class="started-bots-table">
        <div class="table-headding">
          <div class="table-headding-column name">Bot name</div>
          <div class="table-headding-column status">Status</div>
          <div class="table-headding-column settings">Settings</div>
          <div class="table-headding-column details">Detailes</div>
        </div>

        <div class="table-content">
          <div class="table-content-line">
            <div class="name">
              <div class="name-content">
                <span>Old-serv-bot-dog</span>
                <v-icon class="ml-2" small color="#272727">mdi-pencil</v-icon></div>
              </div>
            <div class="status">
              <div class="status-content active">
                <span>
                  Active
                </span>
              </div>
            </div>

            <div class="settings">
              <div class="settings-content stop">
                <v-icon class="mr-2" small>mdi-stop</v-icon> 
                <span>Stop</span>
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
                    
                    <div class="edit-btn-block">
                      <v-btn color="#272727">Edit</v-btn>
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
                <v-icon class="ml-2" small color="#272727">mdi-pencil</v-icon></div>
              </div>
            <div class="status">
              <div class="status-content inactive">
                <span>
                  Not active. Will sleep until tomorrow.
                </span>
              </div>
            </div>

            <div class="settings">
              <div class="settings-content play">
                <v-icon class="mr-2" small>mdi-play</v-icon> 
                <span>Start</span>
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
                    
                    <div class="edit-btn-block">
                      <v-btn color="#272727">Edit</v-btn>
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
                <v-icon class="ml-2" small color="#272727">mdi-pencil</v-icon></div>
              </div>
            <div class="status">
              <div class="status-content active">
                <span>
                  Active
                </span>
              </div>
            </div>

            <div class="settings">
              <div class="settings-content stop">
                <v-icon class="mr-2" small>mdi-stop</v-icon> 
                <span>Stop</span>
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
                    
                    <div class="edit-btn-block">
                      <v-btn color="#272727">Edit</v-btn>
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
                <v-icon class="ml-2" small color="#272727">mdi-pencil</v-icon></div>
              </div>
            <div class="status">
              <div class="status-content active">
                <span>
                  Active
                </span>
              </div>
            </div>

            <div class="settings">
              <div class="settings-content stop">
                <v-icon class="mr-2" small>mdi-stop</v-icon> 
                <span>Stop</span>
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
                    
                    <div class="edit-btn-block">
                      <v-btn color="#272727">Edit</v-btn>
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
                <v-icon class="ml-2" small color="#272727">mdi-pencil</v-icon></div>
              </div>
            <div class="status">
              <div class="status-content inactive">
                <span>
                  Not active. Will sleep until tomorrow.
                </span>
              </div>
            </div>

            <div class="settings">
              <div class="settings-content play">
                <v-icon class="mr-2" small>mdi-play</v-icon> 
                <span>Start</span>
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
                    
                    <div class="edit-btn-block">
                      <v-btn color="#272727">Edit</v-btn>
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
</template>

<script>

  export default {
    name: 'RunbotView',

    components: {
    },
  }
</script>

<style lang="scss">
.runbot-content-wrapper {
  padding: 0 60px 30px 40px;
}

.betfair-login-block {
  width: 100%;  
  border: 0.3px solid #272727;
  border-radius: 5px;
  padding: 40px 60px 40px 40px;
  margin-bottom: 24px;
}

.login-block-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #272727;
  margin-bottom: 25px;
}

.login-details-block {
  display: flex;
  justify-content: space-between;
}

.username-block, .passsword-block, .betfair-api-block {
  display: flex;
  align-items: center;

  .label {
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    color: #272727;
    margin-right: 20px;
  }

  .v-input__slot {
    margin: 0 !important;
  }

  .v-text-field__details {
    display: none;
  }
}

.runbot-screen {
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

  .edit-btn-block {
    margin-top: 40px;

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
}
</style>