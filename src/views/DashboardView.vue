<template>
  <div class="dashboard-content-wrapper">
    <div class="started-bots-section dashboard-section">
      <div class="started-bots-headding">
        <h3>Started bots</h3>
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
                    <div class="date-line">
                      <div class="date">Date</div>
                      <div class="date-value">2022-07-28</div>
                    </div>
                    <div class="balance-line">
                      <div class="balance">Balance</div>
                      <div class="balance-value" :class="{'positive': 181 > 0}">181.35</div>
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
                    <div class="date-line">
                      <div class="date">Date</div>
                      <div class="date-value">2022-07-28</div>
                    </div>
                    <div class="balance-line">
                      <div class="balance">Balance</div>
                      <div class="balance-value" :class="{'positive': 181 > 0}">181.35</div>
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
                    <div class="date-line">
                      <div class="date">Date</div>
                      <div class="date-value">2022-07-28</div>
                    </div>
                    <div class="balance-line">
                      <div class="balance">Balance</div>
                      <div class="balance-value" :class="{'positive': 181 > 0}">181.35</div>
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
                    <div class="date-line">
                      <div class="date">Date</div>
                      <div class="date-value">2022-07-28</div>
                    </div>
                    <div class="balance-line">
                      <div class="balance">Balance</div>
                      <div class="balance-value" :class="{'positive': 181 > 0}">181.35</div>
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
                    <div class="date-line">
                      <div class="date">Date</div>
                      <div class="date-value">2022-07-28</div>
                    </div>
                    <div class="balance-line">
                      <div class="balance">Balance</div>
                      <div class="balance-value" :class="{'positive': 181 > 0}">181.35</div>
                    </div>                    
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>

            </div>
          </div>                            
        </div>
      </div>
    </div>

    <!-- <div class="last-stats-section dashboard-section"></div> -->

    <div class="last-stats-section dashboard-section">
      <div class="stats-headding">
        <h3>Last stats</h3>
      </div>

      <div class="stats-table">
        <div class="table-headding">
          <div class="table-headding-column name">Bot name</div>
          <div class="table-headding-column date">Date</div>
          <div class="table-headding-column balance">Balance</div>
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
                <span>
                  2022-07-29
                </span>
              </div>
            </div>

            <div class="balance">
              <div class="balance-content positive">
                <span>181.35</span>
              </div>
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
                <span>
                  2022-07-28
                </span>
              </div>
            </div>

            <div class="balance">
              <div class="balance-content positive">
                <span>35.76</span>
              </div>
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
                <span>
                  2022-07-27
                </span>
              </div>
            </div>

            <div class="balance">
              <div class="balance-content negative">
                <span> <span v-if="!positiveBalance">-</span>121.21</span>
              </div>
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
                <span>
                  2022-07-26
                </span>
              </div>
            </div>

            <div class="balance">
              <div class="balance-content positive">
                <span>56.83</span>
              </div>
            </div>
          </div>                                                  
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'DashboardView',

    data: () => ({
      positiveBalance: false
    }),

    components: {
    },
  }
</script>
