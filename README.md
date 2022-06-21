# MyDJ
This application is my full-stack capstone project, representing much of what I've learned over the course of a six-month long full-stack web developer course at Nashville Software School (NSS). This application uses HTML, CSS, JavaScript, React, Python, Django, and custom APIs. 

## Introduction
MyDJ, or My Developer's Journal, is an application created for software developers to manage journal entries. I created this app because I like to make journal entries every day, but find that only a small number of my entries requires sketching or drawing, so they end up being pure text based. Since I can type much faster than I can write with pen and paper, I felt a digital recording method for my journal entries would be a nice-to-have application.

MyDJ allows a developer to enter a journal entry with a subject, the substance of the entry (body), mark the entry as either public or private, add one or more tags to represent his/her mood, and also add one or more technology tags. Entries marked as public appear in every developer/user's main page feed; entries marked as private are visible to only the developer who authored it.

## Purpose and Motivation for this Project
The idea for MyDJ came from my desire to journal everyday and not needing to have pen and paper for the majority of my entries. The only time I really need pen and paper is for sketching or drawing my ideas, which is in only a small number of my journal entries. Since I type much faster than I can hand-write, a digital journal management system made perfect sense to me.


## How this Application Works

### Video Demonstration / Walk-Thorough

 <<< COMING SOON .... >>>

### Screen Shot Images

1. Homepage for all users. View shows all journal entries where the developer has marked the entry as "public". 

![Screen Shot 2022-06-21 at 8 12 33 AM](https://user-images.githubusercontent.com/10354411/174810903-9aee1047-68e0-44c4-bda8-72b4d8a52034.png)


2. When a user clicks one of the public journal entries from the homepage, they see the details of the journal entry, as shown here.

![Screen Shot 2022-06-21 at 8 13 15 AM](https://user-images.githubusercontent.com/10354411/174810941-2c8b0f89-5fad-425f-a076-b603ff37220a.png)


3. A user can click the link or button to create a new journal entry. That action brings them to this form where they can enter the subject and body of the entry, select whether it will be public or private, select one or more technology tags, and add one or more mood tags.

![Screen Shot 2022-06-21 at 8 13 27 AM](https://user-images.githubusercontent.com/10354411/174810983-1dbb9aa9-5a46-4a0f-96cc-bfd61f689190.png)


4. This screen shows all entries created by the currently-logged-in user, providing him/her the options of editing an entry or deleting it.

![Screen Shot 2022-06-21 at 8 13 44 AM](https://user-images.githubusercontent.com/10354411/174811022-c3bf21b3-02b1-4085-a92b-d2bd8f931c27.png)


5.  If the currently-logged-in user selects 'Edit' from the previous screen, they're brought here. The data will be pre-filled and the user can edit the journal entry here.

![Screen Shot 2022-06-21 at 8 13 56 AM](https://user-images.githubusercontent.com/10354411/174811052-b5aa787a-c9b6-4dbd-96dc-f12fa6f6d82a.png)


6.  This screen provides maintenance of the mood tags. The list shows all tags in alphabetic order and provides the option to edit a tag or delete it. There is an identical screen for working with technology tags.

![Screen Shot 2022-06-21 at 8 14 08 AM](https://user-images.githubusercontent.com/10354411/174811097-a4dbef34-fd8f-4451-9b6e-e6ad74aaf5fa.png)


7. Editing a mood tag. There is an identical screen for editing technology tags.

![Screen Shot 2022-06-21 at 8 14 17 AM](https://user-images.githubusercontent.com/10354411/174811145-9f332f80-d623-4bf8-85bd-3cdeb51122ff.png)


8.  This screen provides the user a way to add a new mood tag. There is an identical screen for creating new technology tags.

![Screen Shot 2022-06-21 at 8 14 25 AM](https://user-images.githubusercontent.com/10354411/174811196-1b7cfbce-804f-4f62-b295-da70c6d1f18f.png)



### ERD Image

![MyDJ_ERD](https://user-images.githubusercontent.com/10354411/174811274-471e0a51-8e96-47d6-8d71-dbb747d0cec3.png)


## How this Application Was Developed
MyDJ was developed through a methodical approach using a lot of up-front planning. I started with rough, hand-drawn sketches of what the UI would look like and what would happen when the user clicked certain buttons/links. From those sketches, I created wireframes. Having previously tried several different free wireframe tools, this time I just built them in Google Slides; they're included above as part of this README. I then created an ERD which is also shown in this README. 

I created the models for the data tables in Django followed by fixtures of dummy-data to get started. I created viewsets and serializers on the server side. I then planned out the modules/components that would be needed for the client side and created them through React. Once the modules were built, I began pseudo-coding in each. I laid out what the purpose for each module/component would be, keeping in mind the single responsibility principle. Once that was completed, I wrote the algorithms to solve the problems at hand, and finished by writing the code.

In addition to writing the code, I used the Chrome developer/debugging tools extensively, and pushed to Github regularly

## Installing and Running this Application
To run MyDJ, the following steps should be followed: 
1. There are two Github repositories for MyDJ. Clone both the client and the server:
     a. Client: `MyDJ_React`
     b. Server: `MyDJ_Django`
2. Once cloned, move into your Django project directory. Execute:
     a. `pipenv install`
     b. `pipenv shell` 
     c. `pipenv install django autopip8 plying djangorestframework django-cors-headers plyint-django`
3. In VSCode, set `Python: Select Interpreter`
4. In VSCode, set `Linter: Pylint`
5. In the Client (React) project directory, run `rpm install`
6. To run the application, start the server (Django): `python3 manage.py runserver` followed by starting the client (React): `npm start`. Starting the client will open a web browser tab and bring you to the homepage of the application. You can register as a new user or sign-in with a pre-built user with the following credentials:
	a. Username: `abc`
  b. Password: `123`
  
  
## Difficulties and Challenges faced during this Process
This project began smoothly enough, but soon presented me with a few hurdles. Most of my issues were caused by the Many-to-Many relationships involving the use of multiple tags for the moods and technologies associated to a journal entry. After struggling with that concept on several aspects of the application, I finally was able to make it work as designed.

Another huge challenge for MyDJ, just as it was with my front-end capstone project, PropCzar, was CSS. Recalling how much effort I spent on PropCzar with CSS, I decided upfront to make MyDJ very minimalistic in appearance. I decided that functionality was much more important that visual appeal, and that if time permitted, I would incrementally add CSS. 

Another thing I said would be a stretch goal would be to convert the standard text-style navigation bar to a more reactive hamburger menu. I though it would fairly simple and straight-forward, but it proved to be anything but. 





