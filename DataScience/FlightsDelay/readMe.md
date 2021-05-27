Flights Delays and Cancellations
This folder contains various programs that have been written on the 2015 flights delays and cancellations dataset. The purpose of these programs is to gain insights into the data and come up with a solution to the problem of predicting flight delay.
Visualizations 
This program goes through various visualizations on the dataset like the distributions of the departure delays per airline, the distributions of flights for each airline, the number of airports visited by each airline and the comparison of the departure delay and arrival delay of different airlines
Data analytics
This program analyzes the structure of the dataset and checks the amount of values in each column, the number of missing values in the complete dataset and it also provides different visualizations like box plots of the delay times per airlines, which help us gauge the few airlines that have a very high amount of delay time, graphs showing the market shares of different airlines and also a color map showing the number of flights each airlines has for each month.
Models by Months (January/March/June/December)
This program contains the final model. First this program goes through the preprocessing stages like changing the formats of the dates from the original dataset, adding date-time objects to the dataset and dropping the variables that we don’t desire, after this we group our data based on the destination airport and provide the dataset as input to the model.
The model cycles through various values of alpha and n for ridge and polynomial regression respectively and finally settles on the combination that gives us the lowest mean squared error. Finally we use this model to test on the remaining data and validate our results. 
