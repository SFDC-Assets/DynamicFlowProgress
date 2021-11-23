![Status](https://img.shields.io/badge/status-Complete-green)

<h1 align="center">Dynamic Flow Progress Component</h1>

<p align="center">This package contains a Lightning component</p>

<!-- Sections below are Optional -->

---

## Description
This component can be used on a Flow screen to indicate the steps in a flow and the progress made by the user:
* 6 different indicator types (Vertical Progress, Horizontal Progress, Progress Bar, Vertical Navigation Menu, Progress Ring, and Path)
* Override completion % value with your own flow variable (Progress Bar and Progress Ring only)
* Additionally, it uses Custom Labels for display and assistive text, making it friendly for translation into other languages.

## Install & Setup Instructions

**Please see Disclaimer** (bottom of readme)

1. Install from the AppExchange:  **[https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000007zKAc](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000007zKAc)**
2. Add the Dynamic Flow Progress component to a screen element.
3. Configure the component’s properties (see below).
4. Rinse and repeat on other screens in your flow.
5. View the "Dynamic Flow Progress - Sample" flow for configuration examples.

## Component Properties

| Attribute     							| Description	|
| ----------------------------------------- | ------------- |
| **Comma-Separated List of Steps** 		| Add the full list of steps that will make up the indicator.<br><br>To save yourself from accurately configuring this list across multiple screens, create a text **[constant](https://help.salesforce.com/s/articleView?id=sf.flow_ref_resources_constant.htm&type=5)** with that comma-separated list of steps in it, and then reference that constant in this property. Now, when there are changes to your list of steps, you only have to update the value of your constant - not each and every instance of this component. |
| **Current Step**      					| Add the value of the current step. Make sure this value exactly matches the spelling of the step found in the comma-separated list.      |
| **Indicator Type**						| You can add one of the following values: `Vertical`, `Horizontal`, `Bar`, `Ring`, `Path`, or `VertNav`. These are explained below.      |
| **Current Step Percentage Completion**	| OPTIONAL.  The percentage shown in the Bar and Ring indicator types is auto-calculated based on the current number of completed steps, but it can be overridden if you want to show a different number. <br><br> **_To use the auto-calculated %_**: Do nothing - just leave the this property blank. <br><br> **_To override_**: In the component’s configuration, add a value to this property. The value needs to be an integer between 0 and 100 and it can be a static value or a variable that you’ve calculated. |

## Release History

1.0 Initial release (22 Nov 2021)

## Maintainers
[Mitch Lynch/egyptguy](https://github.com/egyptguy)

## Disclaimer

THIS APPLICATION IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL OR SIMILAR DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS APPLICATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

SUBJECT TO THE FOREGOING, THIS APPLICATION MAY BE FREELY REPRODUCED, DISTRIBUTED, TRANSMITTED, USED, MODIFIED, BUILT UPON, OR OTHERWISE EXPLOITED BY OR ON BEHALF OF SALESFORCE.COM OR ITS AFFILIATES, ANY CUSTOMER OR PARTNER OF SALESFORCE.COM OR ITS AFFILIATES, OR ANY DEVELOPER OF APPLICATIONS THAT INTERFACE WITH THE SALESFORCE.COM APPLICATION, FOR ANY PURPOSE, COMMERCIAL OR NON-COMMERCIAL, RELATED TO USE OF THE SALESFORCE.COM APPLICATION, AND IN ANY WAY, INCLUDING BY METHODS THAT HAVE NOT YET BEEN INVENTED OR CONCEIVED.

## References
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Choose an Open Source License](https://choosealicense.com)
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Badges Reference](https://github.com/badges/shields/blob/master/README.md)
* [List of tags to use for repositories](https://salesforce.quip.com/zIyyAzGYRaWu)
* [Email template to get approval for making repo public](https://salesforce.quip.com/8j1jAKTHlk6Q)
