({
    doInit : function(component, evt, helper) {
        var currentStep = component.get('v.currentStep');
        var currentStepPercentage = component.get('v.currentStepPercentage');
        var stepList = component.get('v.stepList').split(/,/);
        var cmps = [];
        var afterCurrent = 'false';
        var countToCurrent = 0;
        var countTotalSteps = stepList.length;
        
        for (var i=0; i<stepList.length; i++){
            
            if(afterCurrent == 'false') {
                // this step might be Completed or Current
                if(stepList[i] == currentStep) {
                    // this is the current step
                    cmps.push({
                        'label': stepList[i],
                        'status': 'Current'
                    });
                    
                    // set afterCurrent to true,
                    // so all subsequent steps
                    // are marked as future
                    afterCurrent = 'true';
                    countToCurrent++;
                }
                else {
                    // this is a completed step
                    cmps.push({
                        'label': stepList[i],
                        'status': 'Complete'
                    });
                    countToCurrent++;
                }
            }
            else {
                // this is an upcoming step
                cmps.push({
                    'label': stepList[i],
                    'status': 'Upcoming'
                });
            }
        }
        
        var pathProgress = (((countToCurrent-1)/(countTotalSteps-1)*100));
        
        if(currentStepPercentage) {
            pathProgress = currentStepPercentage;
        }
        
        component.set("v.countToCurrent", countToCurrent);
        component.set("v.countTotalSteps", countTotalSteps);
        component.set("v.pathProgress", pathProgress);
        component.set("v.stepsArray", cmps);
    }
})