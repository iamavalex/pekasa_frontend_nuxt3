<template>
  <div>
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Supplier's name</th>
            <th>Link</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- Example row -->
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>Hart Hagerty</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>Purple</td>
            <td>YYYY-MM-DD</td>
            <td><ApprovedStatus/></td>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>Hart Hagerty</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>Purple</td>
            <td>YYYY-MM-DD</td>
            <td><PendingStatus/></td>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>Hart Hagerty</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>Purple</td>
            <td>YYYY-MM-DD</td>
            <td><RejectedStatus/></td>
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Supplier's name</th>
            <th>Link</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Add your script here if needed
</script>

<style scoped>
  /* Add your styles here */
</style>
